import { ExpandOptions } from './ExpandOptions';
import { FileCollection } from './FileCollection';
import { FileCollectionItem } from './FileCollectionItem';
import { maybeExpand } from './utilities/maybeExpand';

/**
 * Generate a FileCollection from an array of File
 * File is the native API from the browser. However some libraries like
 * react-drop-zone create a property 'path' rather than 'webkitRelativePath'.
 * By default this method will expand all zip and gzip files
 * @param files - Array of File that could contain 'path' to define the relative path
 * @returns
 */
export async function fileCollectionFromFiles(
  files: File[],
  options: ExpandOptions = {},
): Promise<FileCollection> {
  let fileCollectionItems: FileCollectionItem[] = [];

  for (const file of files) {
    fileCollectionItems.push({
      name: file.name,
      size: file.size,
      //@ts-expect-error We allow file.path as alternative to webkitRelativePath
      relativePath: file.webkitRelativePath || file.path || '.',
      lastModified: file.lastModified,
      text: () => file.text(),
      arrayBuffer: () => file.arrayBuffer(),
      stream: () => file.stream(),
    });
  }

  fileCollectionItems = await maybeExpand(fileCollectionItems, options);

  return new FileCollection(fileCollectionItems);
}