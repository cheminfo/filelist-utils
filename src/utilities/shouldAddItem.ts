import { FilterOptions } from '../Options';

/**
 * Utility function that allows to filter files from a FileCollection ignore by default the dotFiles
 * @param relativePath
 * @param options
 * @returns
 */
export function shouldAddItem(
  relativePath: string,
  options: FilterOptions = {},
): boolean {
  const { ignoreDotfiles = true } = options;
  if (ignoreDotfiles) {
    return (
      relativePath
        .split('/')
        .filter((part) => part.startsWith('.') && part !== '.').length === 0
    );
  }
  return true;
}
