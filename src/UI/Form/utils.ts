export type TBase64 = string | ArrayBuffer | null;
export const toBase64 = (file: File) => new Promise<TBase64>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const fileListToAttachedFileAsync = async (files: File[]) => {
    const arrFiles = Array.from(files);
    const arrayWithPromises = arrFiles.map((file: File) => toBase64(file));
    const filesInBase64 = await Promise.all(arrayWithPromises); // each file in base64
    const normalizedFiles = arrFiles.map((file: File, index: number) => ({
        name: file.name,
        content: filesInBase64[index],
        encoding : "base64"
    }));
    return normalizedFiles

};
