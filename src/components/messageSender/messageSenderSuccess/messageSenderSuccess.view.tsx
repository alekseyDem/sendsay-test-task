import React, { PureComponent } from 'react';
import { UIButton } from '../../../UI/Button/Button';

type TMessageSenderViewProps = {
    reset: () => void
}

export class MessageSenderSuccessView extends PureComponent<TMessageSenderViewProps> {
    render(){
        const {
            reset
        } = this.props;
        return (
            <>
                <h4>
                    Сообщение успешно отправлено
                </h4>
                <UIButton onClick={reset} text={'Отправить еще'}/>
            </>
        )
    }
}
