import React, { PureComponent } from 'react';
import css from './MessageHistoryView.module.scss';
import { SORT_FIELD, TMessageHistoryItem } from '../messageHistoryController/MessageHistory.model';
import {
    getMessageClassName,
    getMessageStatus,
    isAllHistoryItemsSelected,
    isHistoryItemSelected
} from './MessageHistory.utils';
import { TMessageHistoryResponse } from '../../../actions/messageHistory.action';
import { MDASH } from '../../../utils/utils';


const arrowUp = <span style={{color: '#13e613', fontSize: '18px'}}>&#x2191;</span>;
const arrowDown = <span style={{color: '#e6714e', fontSize: '18px'}}>&#x2193;</span>;

type TMessageHistoryViewProps = TMessageHistoryResponse & {
    sortByTheme: () => void,
    sortByDate: () => void,
    handleSelectItem: (item: TMessageHistoryItem, isChecked: boolean) => void,
    handleBulkUpdate: (isChecked: boolean) => void,
    selectedHistoryItems: TMessageHistoryItem[],
    sortField: string,
    isSortOrderDesc: boolean
}

export class MessageHistoryView extends PureComponent<TMessageHistoryViewProps> {
    render() {
        const {
            data,
            sortByTheme,
            sortByDate,
            handleSelectItem,
            sortField,
            isSortOrderDesc,
            selectedHistoryItems,
            handleBulkUpdate
        } = this.props;
        const isSortedByDate = sortField === SORT_FIELD.date &&  isSortOrderDesc ? arrowDown : arrowUp;
        const isSortedByTheme = sortField === SORT_FIELD.theme &&  isSortOrderDesc ? arrowDown : arrowUp;
        const isAllItemsSelected = isAllHistoryItemsSelected(selectedHistoryItems, data);
        return (
            <div className={css.messageHistoryBlock}>
                <div className={css.tableTitle}>Отправленные сообщения</div>
                {!!data.length && <table className={css.tableHistory}>
							    <thead className={css.tableHead}>
							    <tr>
                                    <th>
                                      <input
	                                    onChange={() => handleBulkUpdate(isAllItemsSelected)}
	                                    checked={isAllItemsSelected}
	                                    type="checkbox"/>
                                    </th>
                                    <th onClick={sortByDate}><span className={css.columnName}>Дата</span> {isSortedByDate}</th>
                                    <th onClick={sortByTheme}><span className={css.columnName}>Тема</span> {isSortedByTheme} </th>
                                    <th className={css.thStatus}>Статуc</th>
							    </tr>
							    </thead>
							    <tbody>
                  {data.map((item: TMessageHistoryItem, index: number) => {
                      const isChecked = isHistoryItemSelected(selectedHistoryItems, item.id);
                      return <tr key={index}>
                          <td>
                              <input
                                  onChange={() => handleSelectItem(item, isChecked)}
                                  checked={isChecked}
                                  type="checkbox"/>
                          </td>
                          <td className={css.tdDate}>{item.date}</td>
                          <td className={css.tdTheme} title={item.theme}>{item.theme || MDASH}</td>
                          <td className={getMessageClassName(item.status)}>{getMessageStatus(item.status)}</td>
                      </tr>
                  })}
							    </tbody>
						    </table>}
                {!data.length && <div className={css.emptyHistory}>
							    Сообщения ещё не отправлялись
						    </div>}
            </div>
        )
    }
};
