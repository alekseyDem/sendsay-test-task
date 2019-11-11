import React, { PureComponent } from 'react';
import css from './AttachedFileView.module.scss';
import IconTrash from './IconTrash.svg';
import clip from './clip.png';
import { reformatFileNameForPreview } from './AttachedFileView.utils';

type TUI_UploadFileProps = {
    onDelete: (fileName: string) => void;
    fileName: string,
}

export class UI_AttachedFileView extends PureComponent<TUI_UploadFileProps> {

    handleDeleteFile = () => {
        const {onDelete, fileName} = this.props;
        onDelete(fileName)
    };

    render() {
        const {fileName} = this.props;
        return (
            <div className={css.fileViewer}>
                <div className={css.fileInfoBlock}>
                    <img src={clip} className={css.clip} alt="clip"/>
                    <span className={css.fileName}>{reformatFileNameForPreview(fileName)}</span>
                </div>
                <div className={css.deleteBtn} onClick={this.handleDeleteFile}>
                    <img className={css.deleteIcon} src={IconTrash} alt="delete icon"/>
                    <span>Удалить</span>
                </div>
            </div>
        )
    }
}
