export const isDefined = <T>(variable: T): boolean => typeof variable !== "undefined";
export const isNull = <T>(variable: T): boolean => variable === null;


export function getFileFormatFromFileName(fileName: string) {
    const fileNameArray = fileName.split('.');
    return fileNameArray[fileNameArray.length - 1];
}

export const EMPTY_STRING = '';
export const EMPTY_ARRAY = [];
export const MDASH = '—';
