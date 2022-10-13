import { ExpandOptions } from './ExpandOptions';
import { FileCollection } from './FileCollection';
import { FileCollectionItem } from './FileCollectionItem';
import { maybeExpand } from './utilities/maybeExpand';

/**
 * Generate a FileCollection from a FileList
 * FileList is the native API from the browser however in order to use this function
 * the File need the webkitRelativePath property. This property is added by the browser
 * if the input element has the webkitdirectory property like for example
 * `<input type="file" webkitdirectory/>'
 * By default this method will expand all zip and gzip files
 * @param fileList - iterable object obtained using a input type="file" with webkitRelativePath property
 * @returns
 */
export async function fileCollectionFromFileList(
  fileList: FileList,
  options: ExpandOptions = {},
): Promise<FileCollection> {
  let fileCollectionItems: FileCollectionItem[] = [];

  for (const file of fileList) {
    fileCollectionItems.push({
      name: file.name,
      size: file.size,
      relativePath: file.webkitRelativePath || file.name,
      lastModified: file.lastModified,
      text: () => file.text(),
      arrayBuffer: () => file.arrayBuffer(),
      //TODO check why this is happening
      //@ts-expect-error is this due to different of stream ? not a web stream ?
      stream: () => file.stream(),
    });
  }

  fileCollectionItems = await maybeExpand(fileCollectionItems, options);

  return new FileCollection(fileCollectionItems);
}
