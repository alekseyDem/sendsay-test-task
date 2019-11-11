import React from 'react';
import css from './Button.module.scss';
import classNames from 'classnames'

type TButtonProps = {
    onClick: () => void;
    text: string;
    disabled?: boolean;
}

const classname = classNames(css.button, css.button__mSize, css.button__submit);

export const UIButton = (props: TButtonProps) => {
    const { onClick, disabled} = props;
    return (
        <button disabled={disabled}
                className={classname}
                onClick={onClick}>
            {props.text}
        </button>
    )
};
