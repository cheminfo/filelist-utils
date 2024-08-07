import { readdir, stat, readFile } from 'fs/promises';
import { join } from 'path';

import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import { fileCollectionFromWebSource } from '../fileCollectionFromWebSource';

let fileRequestedCounter = 0;
const server = setupServer(
  http.get('http://localhost/data*', async ({ request }) => {
    const pathname = join(__dirname, new URL(request.url).pathname);
    const pathnameStat = await stat(pathname);
    if (pathnameStat.isDirectory()) {
      const source = await getJSON(join(__dirname, 'dataUnzip'));
      return HttpResponse.json(source);
    } else if (pathnameStat.isFile()) {
      fileRequestedCounter++;
      const data = await readFile(pathname);
      return HttpResponse.arrayBuffer(data);
    } else {
      throw new Error(`unknown path: ${pathname}`);
    }
  }),
);

// Enable request interception.
beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  fileRequestedCounter = 0;
});

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers());

// Don't forget to clean up afterwards.
afterAll(() => {
  server.close();
});

describe('fileCollectionFromWebSource', () => {
  test('with baseURL in options', async () => {
    const source = {
      entries: [
        {
          relativePath: 'data/dir1/a.txt',
        },
        {
          relativePath: 'data/dir1/b.txt',
        },
      ],
      baseURL: 'http://localhost/',
    };

    const fileCollection = await fileCollectionFromWebSource(source, {});
    expect(fileCollection.files).toHaveLength(2);
    const first = await fileCollection.files[0].text();
    expect(first).toBe('a');
    await fileCollection.files[0].text();
    // no cache it is reloaded a second time
    expect(fileRequestedCounter).toBe(2);
    const second = await fileCollection.files[1].arrayBuffer();
    expect(Array.from(Buffer.from(second))).toStrictEqual([98]);
  });

  test('without any baseURL', async () => {
    const source = {
      entries: [
        {
          relativePath: 'data/dir1/a.txt',
        },
        {
          relativePath: 'data/dir1/b.txt',
        },
      ],
    };

    await expect(() => fileCollectionFromWebSource(source)).rejects.toThrow(
      'We could not find a baseURL for data/dir1/a.txt',
    );
  });

  test('with cache', async () => {
    const source = {
      entries: [
        {
          relativePath: 'data/dir1/a.txt',
        },
        {
          relativePath: 'data/dir1/b.txt',
        },
      ],
      baseURL: 'http://localhost/',
    };

    const fileCollection = await fileCollectionFromWebSource(source, {
      cache: true,
    });
    expect(fileCollection.files).toHaveLength(2);
    const first = await fileCollection.files[0].text();
    expect(first).toBe('a');
    await fileCollection.files[0].text();
    // cached it is loaded only once
    expect(fileRequestedCounter).toBe(1);
  });

  test('with cache and arrayBuffer conversion', async () => {
    const source = {
      entries: [
        {
          relativePath: 'data/dir1/a.txt',
        },
      ],
      baseURL: 'http://localhost/',
    };

    const fileCollection = await fileCollectionFromWebSource(source, {
      cache: true,
    });
    expect(fileCollection.files).toHaveLength(1);
    const first = await fileCollection.files[0].arrayBuffer();
    const array = Array.from(Buffer.from(first));
    expect(array[0]).toBe(97);
    // cached it is loaded only once and we convert the arrayBuffer to text
    const text = await fileCollection.files[0].text();
    expect(text).toBe('a');
    expect(fileRequestedCounter).toBe(1);
  });

  test('with duplicate', async () => {
    const source = {
      entries: [
        {
          relativePath: 'data/dir1/a.txt',
        },
        {
          relativePath: 'data/dir1/a.txt',
        },
      ],
      baseURL: 'http://localhost/',
    };

    await expect(() => fileCollectionFromWebSource(source)).rejects.toThrow(
      'Duplicate relativePath: data/dir1/a.txt',
    );
  });

  test('with defaultBaseURL', async () => {
    const url = 'http://localhost/data';
    const response = await fetch(url);
    const source = await response.json();

    source.baseURL = 'http://localhost/';

    const fileCollection = await fileCollectionFromWebSource(source, {});

    expect(fileCollection.files).toHaveLength(15);
    const first = await fileCollection.files[0].text();
    expect(first).toBe('c');
    const second = await fileCollection.files[1].arrayBuffer();
    expect(Array.from(Buffer.from(second))).toStrictEqual([100]);
    const third = await fileCollection.files[14].arrayBuffer();
    expect(Array.from(Buffer.from(third))).toHaveLength(580);
  });

  test('with baseURL in the file', async () => {
    const url = 'http://localhost/data';
    const response = await fetch(url);
    const source = await response.json();

    source.entries.forEach((entry: any) => {
      entry.baseURL = 'http://localhost/';
    });

    const fileCollection = await fileCollectionFromWebSource(source, {});

    expect(fileCollection.files).toHaveLength(15);
    const first = await fileCollection.files[0].text();
    expect(first).toBe('c');
    const second = await fileCollection.files[1].arrayBuffer();
    expect(Array.from(Buffer.from(second))).toStrictEqual([100]);
    const third = await fileCollection.files[14].arrayBuffer();
    expect(Array.from(Buffer.from(third))).toHaveLength(580);
  });
});

async function getJSON(path: string) {
  const entries: any = [];
  await appendFiles(entries, path);
  entries.forEach((entry: any) => {
    entry.relativePath = entry.relativePath.replace(/.*__tests__\//, '');
  });
  return { entries };
}

async function appendFiles(files: any, currentDir: string) {
  const entries = await readdir(currentDir);
  for (const entry of entries) {
    const current = join(currentDir, entry);
    const info = await stat(current);

    if (info.isDirectory()) {
      await appendFiles(files, current);
    } else {
      files.push({
        name: entry,
        size: info.size,
        relativePath: join(currentDir, entry).replace(/\\/g, '/'),
        lastModified: Math.round(info.mtimeMs),
      });
    }
  }
}

test('zip file should be unzipped', async () => {
  const source = {
    entries: [
      {
        relativePath: 'data.zip',
      },
    ],
    baseURL: 'http://localhost/',
  };

  const fileCollection = await fileCollectionFromWebSource(source, {
    cache: true,
  });
  expect(fileCollection.files).toHaveLength(6);
  const first = await fileCollection.files[0].text();
  expect(first).toBe('a');
  await fileCollection.files[0].text();
  // cached it is loaded only once
  expect(fileRequestedCounter).toBe(1);
});

test('zip file has strange extension and should not be unzipped', async () => {
  const source = {
    entries: [
      {
        relativePath: 'data.zp',
      },
    ],
    baseURL: 'http://localhost/',
  };

  const fileCollection = await fileCollectionFromWebSource(source, {
    cache: true,
  });
  expect(fileCollection.files).toHaveLength(1);
});

test('zip file should be unzipped because we add options', async () => {
  const source = {
    entries: [
      {
        relativePath: 'data.zp',
        options: {
          unzip: { zipExtensions: ['zp'] },
        },
      },
    ],
    baseURL: 'http://localhost/',
  };

  const fileCollection = await fileCollectionFromWebSource(source, {
    cache: true,
  });
  expect(fileCollection.files).toHaveLength(6);
  const first = await fileCollection.files[0].text();
  expect(first).toBe('a');
  await fileCollection.files[0].text();
  // cached it is loaded only once
  expect(fileRequestedCounter).toBe(1);
});
