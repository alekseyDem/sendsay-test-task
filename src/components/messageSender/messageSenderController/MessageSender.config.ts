import {
    ACCEPTED_FILE_FORMATS,
    MAX_FILE_SIZE_IN_B,
    MAX_FILE_SIZE_IN_MB, MAX_TOTAL_FILES_SIZE_IN_B,
    MAX_TOTAL_FILES_SIZE_IN_MB
} from '../../../config/filesUpload.config';
import { isFieldEmpty, isValidEmail } from '../../../UI/Form/TextInput/TextInput.utils';

export const FIELDS_ERRORS = {
    EMPTY_FIELD: 'Поле не может быть пустым',
    INVALID_EMAIL: 'Email не валиден',
    INVALID_SINGLE_FILE_SIZE: `Размер файла не должен превышать ${MAX_FILE_SIZE_IN_MB}мб`,
    INVALID_TOTAL_FILE_SIZE: `Общий размер файлов не должен превышать ${MAX_TOTAL_FILES_SIZE_IN_MB}мб`,
    INVALID_FILE_FORMAT: 'Недопустисый формат файлов',
    FILE_PARSE_ERROR: 'Ошибка чтения файла'
};

export const fieldsValidationRules = {
    senderEmail: [
        {
            validator: isFieldEmpty,
            errorMessage: FIELDS_ERRORS.EMPTY_FIELD
        },
        {
            validator: isValidEmail,
            errorMessage: FIELDS_ERRORS.INVALID_EMAIL
        }],
    recipientEmail: [
        {
            validator: isFieldEmpty,
            errorMessage: FIELDS_ERRORS.EMPTY_FIELD
        },
        {
            validator: isValidEmail,
            errorMessage: FIELDS_ERRORS.INVALID_EMAIL
        }],
};

export const attachedFilesValidationRules = {
    checkSingleFileSize: {
        validator: (fileSizesPerFile: number[]) => fileSizesPerFile.some((fileSize: number) => fileSize > MAX_FILE_SIZE_IN_B),
        errorMessage: FIELDS_ERRORS.INVALID_SINGLE_FILE_SIZE
    },
    checkTotalFilesSize: {
        validator: (fileSizesPerFile: number[]) => {
            const attachedFilesSizeTotal = fileSizesPerFile.reduce((prev: number, current: number) => prev + current, 0);
            return fileSizesPerFile.length > 1 && attachedFilesSizeTotal > MAX_TOTAL_FILES_SIZE_IN_B
        },
        errorMessage: FIELDS_ERRORS.INVALID_TOTAL_FILE_SIZE
    },
    checkFileFormat: {
        validator: (filesFormats: string[]) => filesFormats.some((fileFormat: string) => ACCEPTED_FILE_FORMATS.indexOf(fileFormat) === -1),
        errorMessage: FIELDS_ERRORS.INVALID_FILE_FORMAT
    },
};
