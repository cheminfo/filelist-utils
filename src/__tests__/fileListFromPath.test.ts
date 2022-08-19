import { join } from 'path';

import { fileListFromPath } from '../fileListFromPath';

describe('fileListFromPath', () => {
  it('simple data', async () => {
    const fileList = await fileListFromPath(join(__dirname, 'data'));

    expect(
      Array.from(
        fileList.map(
          (a) =>
            `${a.webkitRelativePath.replace(/^.*__tests__\/data/, '')} - ${
              a.name
            }`,
        ),
      ),
    ).toStrictEqual([
      '/dir1/a.txt - a.txt',
      '/dir1/b.txt - b.txt',
      '/dir1/dir3/e.txt - e.txt',
      '/dir1/dir3/f.txt - f.txt',
      '/dir2/c.txt - c.txt',
      '/dir2/d.txt - d.txt',
      '/dir3/a.MpT - a.MpT',
      '/dir3/a.mpr - a.mpr',
      '/dir3/a.mps - a.mps',
    ]);

    const text = await fileList[0].text();
    expect(text).toBe('a');
    const arrayBuffer = new Uint8Array(await fileList[0].arrayBuffer());
    expect(arrayBuffer[0]).toBe(97);
    const stream = fileList[1].stream();
    const results = [];
    for await (let chunk of stream) {
      results.push(chunk);
    }
    expect(results[0][0]).toBe(98);
  });

  it('data with zip', async () => {
    const fileList = await fileListFromPath(join(__dirname, 'dataUnzip'));

    expect(
      Array.from(
        fileList.map(
          (a) =>
            `${a.webkitRelativePath.replace(/^.*__tests__\/dataUnzip/, '')} - ${
              a.name
            }`,
        ),
      ),
    ).toStrictEqual([
      '/data.zip/data/c.txt - c.txt',
      '/data.zip/data/d.txt - d.txt',
      '/data.zip/data/dir1/a.txt - a.txt',
      '/data.zip/data/dir1/b.txt - b.txt',
      '/data.zip/data/dir1/dir3/e.txt - e.txt',
      '/data.zip/data/dir1/dir3/f.txt - f.txt',
      '/data.zip/data/dir1/dir3/zipFile3.zip/c.txt - c.txt',
      '/data.zip/data/dir1/dir3/zipFile3.zip/d.txt - d.txt',
      '/dir1/a.txt - a.txt',
      '/dir1/b.txt - b.txt',
      '/dir1/dir3/e.txt - e.txt',
      '/dir1/dir3/f.txt - f.txt',
      '/dir2/c.txt - c.txt',
      '/dir2/d.txt - d.txt',
      '/dir2/data.zipped - data.zipped',
    ]);
  });
});
