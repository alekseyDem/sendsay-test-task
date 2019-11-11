export const ACCEPTED_FILE_FORMATS = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'doc', 'xls', 'zip', 'rar', '7zip', 'tgz'];

export const FILE_ATTACH_CONFIG = {
    multiple: true
};

// 5e+6 = 5mb
const BYTES_IN_MB = 1e+6;
export const MAX_FILE_SIZE_IN_MB = 5;
export const MAX_FILE_SIZE_IN_B = MAX_FILE_SIZE_IN_MB * BYTES_IN_MB;
export const MAX_TOTAL_FILES_SIZE_IN_MB = 20;
export const MAX_TOTAL_FILES_SIZE_IN_B = MAX_TOTAL_FILES_SIZE_IN_MB * BYTES_IN_MB;
