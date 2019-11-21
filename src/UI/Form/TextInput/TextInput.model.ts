import React from 'react';

export type TUITextInputProps<T> = {
    onChange: (e: React.ChangeEvent<T>) => void;
    placeholder: string;
    errorMessage?: string;
    labelText?: string;
    inputPosition?: INPUT_POSITION;
    value: string,
    fieldName: string,
}

export enum INPUT_POSITION {
    LEFT = '* LEFT *',
    RIGHT = '* RIGHT *',
}
