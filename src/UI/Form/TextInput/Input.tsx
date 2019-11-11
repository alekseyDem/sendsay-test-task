import React from 'react';
import css from './Input.module.scss';
import { isDefined } from '../../../utils/utils';
import { detectInputPosition } from './Input.utils';
import { TUI_InputProps } from './Input.model';

export const UIInputField = (props: TUI_InputProps) => {
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
                {/*<textarea className={css.textArea}></textarea>*/}
                {errorMessage && <div className={css.formError}>{errorMessage}</div>}
            </div>
        </div>
    )
};
