import React from 'react';

import { storiesOf } from '@storybook/react';
import { MessageHistoryController } from './MessageHistory.controller';
import { RemoteDataStatus } from '../../../RemoteData/RemoteData.component';

export let MessageHistoryFixture = [
    {
        date: '01.01.05',
        theme: 'Тема письма, которая не поместится в эту строку, потому что там се и то',
        status: -2
    },
    {
        date: '01.01.06',
        theme: 'Test 1',
        status: 1
    },
    {
        date: '01.01.07',
        theme: 'Test 2',
        status: -1
    }
];

storiesOf("Message History table", module)
    .add("Regular",

        () => <MessageHistoryController errorMessage={null} loadingStatus={RemoteDataStatus.SUCCESS} getHistory={() => console.log('get history')} data={MessageHistoryFixture}/>
    )
    .add("With Empty Data",
        () => <MessageHistoryController errorMessage={null} loadingStatus={RemoteDataStatus.SUCCESS} getHistory={() => console.log('get history')} data={[]}/>
    )
