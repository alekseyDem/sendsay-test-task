import React, { Component } from 'react';
import css from './App.module.scss';


import { MessageSenderContainer } from './containers/messageSender/MessageForm.container';
import { MessageHistoryContainer } from './containers/messageHistory/MessageHistory.container';
export class App extends Component {
  render () {

    return (
        <div className={css.background}>
            <div className={css.contentWrapper}>
                <MessageSenderContainer />
                <MessageHistoryContainer />
            </div>
        </div>
    );
  }
}

export default App;
