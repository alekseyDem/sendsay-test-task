import React, { PureComponent } from 'react';
import { TMessageHistoryItem } from '../messageHistory/messageHistoryController/MessageHistory.model';
import css from './SelectedHistory.module.scss';
import IconTrash from '../../UI/AttachedFileView/IconTrash.svg';
import { MDASH } from '../../utils/utils';


type TSelectedHistoryViewProps = {
    selectedHistoryItems: TMessageHistoryItem[],
    deleteSelectedHistoryItem: (id: number) => void;
};


export class SelectedHistoryView extends PureComponent<TSelectedHistoryViewProps> {
    render() {
        const {
            selectedHistoryItems,
            deleteSelectedHistoryItem
        } = this.props;
        return (
            <div>
                <h3>Выбранные сообщения</h3>
                {selectedHistoryItems.length ? <ul>
                    {selectedHistoryItems.map((dataItem: TMessageHistoryItem, index: number) => {
                        return (
                            <li key={index} className={css.selectedItemWrapper}>
                                <b>ID: {dataItem.id}</b> {MDASH} Отправлено: {dataItem.date}
                                <img
                                    src={IconTrash}
                                    className={css.deleteIcon}
                                    onClick={() => deleteSelectedHistoryItem(dataItem.id)}
                                    alt="delete icon"
                                />
                            </li>
                        )
                    })}
                </ul> : <p>Нет сообщений</p>
                }
            </div>

        )
    }
}
