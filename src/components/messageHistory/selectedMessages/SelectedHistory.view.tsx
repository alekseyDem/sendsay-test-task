import React, { PureComponent } from 'react';
import { TMessageHistoryItem } from '../messageHistoryController/MessageHistory.model';
import { UIButton } from '../../../UI/Button/Button';
import css from './SelectedHistory.module.scss';


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
            <ul>
                {selectedHistoryItems.map((dataItem: TMessageHistoryItem, index: number) => {
                    return (
                        <li key={index} className={css.selectedItemWrapper}>
                            {dataItem.date}  {dataItem.theme} <UIButton onClick={() => deleteSelectedHistoryItem(dataItem.id)} text={'Удалить'} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}
