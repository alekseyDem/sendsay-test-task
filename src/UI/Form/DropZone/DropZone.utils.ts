import { FILE_ATTACH_CONFIG } from '../../../config/filesUpload.config';

export const setDNDConfig = (onDropHandler: (files: File[]) => void) => {
    return {
        onDrop: (acceptedFiles: File[]) => {
            onDropHandler(acceptedFiles)
        },
        ...FILE_ATTACH_CONFIG
    }
};
