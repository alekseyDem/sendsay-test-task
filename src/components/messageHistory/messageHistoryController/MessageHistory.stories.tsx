import React from 'react';

import { storiesOf } from '@storybook/react';
import { TMessageHistoryItem } from './MessageHistory.model';

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

storiesOf("Message History table", module)
    // .add("Regular",
    //
    //     () => <MessageHistoryController errorMessage={null} loadingStatus={RemoteDataStatus.SUCCESS} getHistory={() => console.log('get history')} data={MessageHistoryFixture}/>
    // )
    // .add("With Empty Data",
    //     () => <MessageHistoryController errorMessage={null} loadingStatus={RemoteDataStatus.SUCCESS} getHistory={() => console.log('get history')} data={[]}/>
    // )
