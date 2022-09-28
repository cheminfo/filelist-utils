import { ungzip } from 'pako';

import { FileCollectionItem } from './FileCollectionItem';

export function ungzipStream(file: FileCollectionItem) {
  return new ReadableStream({
    start(controller) {
      void file
        .arrayBuffer()
        .then((arrayBuffer) => ungzip(new Uint8Array(arrayBuffer)))
        .then((arrayBuffer) => {
          controller.enqueue(arrayBuffer);
          controller.close();
        });
    },
  });
}
