import React from 'react';
import css from './../TextInput.module.scss';

import { TUITextInputProps } from '../TextInput.model';
import { isDefined } from '../../../../utils/utils';
import { detectInputPosition } from '../TextInput.utils';

export const UIInputField = (props: TUITextInputProps<HTMLInputElement>) => {
    const {
        placeholder,
        errorMessage,
        onChange,
        labelText,
        inputPosition,
        fieldName,
        value,
    } = props;
    const inputClassName = detectInputPosition(inputPosition);
    return (
        <div className={css.formWFieldWrapper}>
            {isDefined(labelText) && <label className={css.label} htmlFor={fieldName}>{labelText}</label>}
            <div className={css.inputAndErrorWrapper}>
                <input type="text"
                       value={value}
                       id={fieldName}
                       onChange={onChange}
                       placeholder={placeholder}
                       className={inputClassName}
                />
                {errorMessage && <div className={css.formError}>{errorMessage}</div>}
            </div>
        </div>
    )
};
