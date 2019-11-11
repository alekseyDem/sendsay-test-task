import { getFileFormatFromFileName } from '../../utils/utils';

const MAX_FILE_NAME_FOR_DISPLAY = 20;

export function reformatFileNameForPreview(fileName: string) {
    if (fileName.length > MAX_FILE_NAME_FOR_DISPLAY) {
        const fileNameExtension = getFileFormatFromFileName(fileName);
        const fileNameCutted = fileName.slice(0, MAX_FILE_NAME_FOR_DISPLAY);
        return `${fileNameCutted}...${fileNameExtension}`
    } else {
        return fileName
    }
}
