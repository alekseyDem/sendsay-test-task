export type TFileToSend = {
    name: string;
    content: string | ArrayBuffer | null;
    encoding: string
}

export type TValueOrNull<T> = T | null;

export type TNullOrError = TValueOrNull<Error>;
