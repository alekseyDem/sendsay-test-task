import React from 'react';

export type TUI_InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
