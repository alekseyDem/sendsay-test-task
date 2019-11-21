import React, { PureComponent } from 'react';
import {
    SORT_FIELD,
    TFIELD,
    TMessageHistoryControllerState, TMessageHistoryItem
} from './MessageHistory.model';
import { MessageHistoryView } from '../messageHistoryView/MessageHistory.view';
import { changeSortOrder, sortByField, sortNumAndString, sortDate } from './MessageHistory.utils';
import { TMessageHistoryContainerProps } from '../../../containers/messageHistory/MessageHistory.container';
import { TMessageHistoryResponse } from '../../../actions/messageHistory.action';
import { WithLoading } from '../../../RemoteData/RemoteData.component';


const initialState: TMessageHistoryControllerState = {
    sortField: SORT_FIELD.date,
    isSortOrderDesc: false,
    dataUI: [],
    data:[],
};

type TMessageHistoryControllerProps = TMessageHistoryContainerProps & TMessageHistoryResponse;

export class MessageHistoryController extends PureComponent<TMessageHistoryControllerProps, TMessageHistoryControllerState> {
    state = initialState;

    componentDidMount(): void {
        const {getHistory} = this.props;
        getHistory()
    }


    render() {
        const { sortField, dataUI, isSortOrderDesc} = this.state;
        const { loadingStatus, errorMessage, selectedHistoryItems } = this.props;
        return (
            <WithLoading error={errorMessage} status={loadingStatus}>
                <MessageHistoryView
                    data={dataUI}
                    selectedHistoryItems={selectedHistoryItems}
                    sortByTheme={this.sortByTheme}
                    sortByDate={this.sortByDate}
                    handleSelectItem={this.handleSelectItem}
                    handleBulkUpdate={this.handleBulkUpdate}
                    sortField={sortField}
                    isSortOrderDesc={isSortOrderDesc}
                />
            </WithLoading>

        )
    }

    static getDerivedStateFromProps(props: TMessageHistoryControllerProps, state: TMessageHistoryControllerState) {
        if (props.data !== state.data) {
            return {
                data: props.data,
                dataUI: props.data,
            };
        }
        return null;
    }

    handleBulkUpdate = (isChecked: boolean) => {
        const { setBulk, deleteBulk, data } = this.props;
        if (isChecked) {
            deleteBulk()
        } else {
            setBulk(data)
        }
    };

    handleSelectItem = (item: TMessageHistoryItem, isChecked: boolean) => {
        const { setSelectedItem, deleteSelectedHistoryItem } = this.props;
        if (isChecked) {
            deleteSelectedHistoryItem(item.id)
        } else  {
            setSelectedItem(item)
        }
    };

    sortByTheme = () => {
        const {data} = this.props;
        const {sortField, isSortOrderDesc} = this.state;
        // TODO rewrite fields
        const FIELD_THEME = SORT_FIELD.theme as TFIELD;
        const isSortOrderDescModified = changeSortOrder(sortField, FIELD_THEME, isSortOrderDesc);

        const sortedData = sortByField(data, FIELD_THEME, isSortOrderDescModified, sortNumAndString);
        this.setState({
            dataUI: sortedData,
            isSortOrderDesc: !isSortOrderDesc,
            sortField: FIELD_THEME
        })
    };

    sortByDate = () => {
        const {data} = this.props;
        const {isSortOrderDesc} = this.state;
        // TODO rewrite fields and remove ts-ignore
        const FIELD_DATE = SORT_FIELD.date as TFIELD;
        // @ts-ignore
        const sortedData = sortByField(data, FIELD_DATE, isSortOrderDesc, sortDate);
        this.setState({
            dataUI: sortedData,
            isSortOrderDesc: !isSortOrderDesc,
            sortField: FIELD_DATE
        })
    };


}
