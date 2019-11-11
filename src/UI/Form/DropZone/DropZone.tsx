import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import css from './DropZone.module.scss';
import { setDNDConfig } from './DropZone.utils';

type TDropZoneProps = {
    onDropHandler: Function;
    children: JSX.Element
}

export const DropZone = (props: TDropZoneProps) => {
    const { onDropHandler } = props;
    const onDrop = useCallback(acceptedFiles => {
        onDropHandler(acceptedFiles)
    }, []);
    const {getRootProps, isDragActive} = useDropzone(setDNDConfig(onDrop));

    return (
        <div {...getRootProps({className: css.dropZone})}>
            {props.children}
            {isDragActive && <div className={css.dropZoneInfoBlock}>
	            <div className={css.dropZoneInfoBlock__message}>
                    <div className={css.dropZoneInfoBlock__title}>
                      Бросайте файлы сюда, я ловлю
                    </div>
                    <div className={css.dropZoneInfoBlock__description}>
	                    Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ
                    </div>
                </div>
            </div>}
        </div>
    );
}
