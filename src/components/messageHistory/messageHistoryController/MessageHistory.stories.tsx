import React from 'react';

import { storiesOf } from '@storybook/react';
import { TMessageHistoryItem } from './MessageHistory.model';
import { MessageHistoryController } from './MessageHistory.controller';
import { RemoteDataStatus } from '../../../RemoteData/RemoteData.component';

export let MessageHistoryFixture: TMessageHistoryItem[] = [
    {
        date: '01.01.05',
        theme: 'Тема письма, которая не поместится в эту строку, потому что там се и то',
        status: -2,
        id: 1
    },
    {
        date: '01.01.06',
        theme: 'Test 1',
        status: 1,
        id: 2
    },
    {
        date: '01.01.07',
        theme: 'Test 2',
        status: -1,
        id: 3
    }
];

let SelectedHistoryItemsFixture: TMessageHistoryItem[] = [
    {
        date: '01.01.07',
        theme: 'Test 2',
        status: -1,
        id: 3
    }
];

storiesOf("Message History table", module)
    .add("Regular",

        () => <MessageHistoryController
            errorMessage={null}
            selectedHistoryItems={SelectedHistoryItemsFixture}
            loadingStatus={RemoteDataStatus.SUCCESS}
            getHistory={() => console.log('get history')}
            data={MessageHistoryFixture}
            setBulk={(items: TMessageHistoryItem[]) => {console.log('set bulk ', items)}}
            setSelectedItem={(item: TMessageHistoryItem) => {console.log('setSelectedItem ' ,item)}}
            deleteSelectedHistoryItem={(id: number) => {console.log('deleteSelectedHistoryItem ' , id)}}
            deleteBulk={() => console.log('delete Bulk')}
        />
    )
    .add("With Empty Data",
        () => <MessageHistoryController
            errorMessage={null}
            selectedHistoryItems={[]}
            loadingStatus={RemoteDataStatus.SUCCESS}
            getHistory={() => console.log('get history')}
            data={[]}
            setBulk={(items: TMessageHistoryItem[]) => {console.log('set bulk ', items)}}
            setSelectedItem={(item: TMessageHistoryItem) => {console.log('setSelectedItem ' ,item)}}
            deleteSelectedHistoryItem={(id: number) => {console.log('deleteSelectedHistoryItem ' , id)}}
            deleteBulk={() => console.log('delete Bulk')}
        />
    );
