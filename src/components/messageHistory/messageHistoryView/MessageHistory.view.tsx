import React, { PureComponent } from 'react';
import css from './MessageHistoryView.module.scss';
import { SORT_FIELD, TMessageHistoryItem } from '../messageHistoryController/MessageHistory.model';
import { getMessageClassName, getMessageStatus } from './MessageHistory.utils';
import { TMessageHistoryResponse } from '../../../actions/messageHistory.action';


const arrowUp = <span style={{color: '#13e613', fontSize: '18px'}}>&#x2191;</span>;
const arrowDown = <span style={{color: '#e6714e', fontSize: '18px'}}>&#x2193;</span>;

type TMessageHistoryViewProps = TMessageHistoryResponse & {
    sortByTheme: () => void,
    sortByDate: () => void,
    sortField: string,
    isSortOrderDesc: boolean
}

export class MessageHistoryView extends PureComponent<TMessageHistoryViewProps> {
    render() {
        const {
            data,
            sortByTheme,
            sortByDate,
            sortField,
            isSortOrderDesc
        } = this.props;
        return (
            <div className={css.messageHistoryBlock}>
                <div className={css.tableTitle}>Отправленные сообщения</div>
                {!!data.length && <table className={css.tableHistory}>
							    <thead className={css.tableHead}>
							    <tr>
								    <th onClick={sortByDate}><span className={css.columnName}>Дата</span> {sortField === SORT_FIELD.date &&  isSortOrderDesc ? arrowDown : arrowUp}</th>
                                  <th onClick={sortByTheme}><span className={css.columnName}>Тема</span> {sortField === SORT_FIELD.theme &&  isSortOrderDesc ? arrowDown : arrowUp} </th>
								    <th className={css.thStatus}>Статуc</th>
							    </tr>
							    </thead>
							    <tbody>
                  {data.map((item: TMessageHistoryItem, index: number) => {
                      return <tr key={index}>
                          <td className={css.tdDate}>{item.date}</td>
                          <td className={css.tdTheme} title={item.theme}>{item.theme || '—'}</td>
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
