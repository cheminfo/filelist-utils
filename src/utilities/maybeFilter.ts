import { FileCollectionItem } from '../FileCollectionItem';

export type FilterOptions = {
  /**
   * Should we ignored files starting with dot
   * @default true
   */
  ignoreDotFiles?: boolean;
};

/**
 * Utility function that allows to expand gzip and zip files without really expanding them
 * @param fileCollection
 * @param options
 * @returns
 */
export async function maybeFilter(
  fileCollectionItems: FileCollectionItem[],
  options: FilterOptions = {},
): Promise<FileCollectionItem[]> {
  const { ignoreDotFiles = true } = options;
  if (ignoreDotFiles) {
    fileCollectionItems = fileCollectionItems.filter(
      (item) => !item.name.startsWith('.'),
    );
  }
  return fileCollectionItems;
}
