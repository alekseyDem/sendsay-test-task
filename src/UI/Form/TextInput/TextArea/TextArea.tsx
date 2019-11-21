import React from 'react';
import css from './../TextInput.module.scss';
import { TUITextInputProps } from '../TextInput.model';
import { isDefined } from '../../../../utils/utils';


export const UITextArea = (props: TUITextInputProps<HTMLTextAreaElement>) => {
    const {
        placeholder,
        errorMessage,
        onChange,
        labelText,
        fieldName,
        value,
    } = props;
    return (
        <div className={css.formWFieldWrapper}>
            {isDefined(labelText) && <label className={css.label} htmlFor={fieldName}>{labelText}</label>}
            <div className={css.inputAndErrorWrapper}>
                <textarea value={value} onChange={onChange} placeholder={placeholder} className={css.textArea} />
                {errorMessage && <div className={css.formError}>{errorMessage}</div>}
            </div>
        </div>
    )
};
