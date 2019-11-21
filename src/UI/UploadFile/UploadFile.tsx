import React, { ChangeEvent } from 'react';
import css from './UploadFile.module.scss';
import clipper from './clipper.svg';
import { FILE_ATTACH_CONFIG } from '../../config/filesUpload.config';

type TUI_UploadFileProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export const UI_UploadFile = (props: TUI_UploadFileProps) => {
    const {disabled, onChange} = props;
    return (
	    <label className={css.label}>
            <img src={clipper} className={css.clipperIcon} alt="clip"/>
            <span className={css.text}>
                Прикрепить файл
            </span>
            <input
                className={css.input}
                disabled={disabled}
                type="file"
                onChange={onChange}
                {...FILE_ATTACH_CONFIG}
            />
        </label>
    )
};
