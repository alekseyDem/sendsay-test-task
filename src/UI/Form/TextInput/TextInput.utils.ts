import css from './TextInput.module.scss';
import { INPUT_POSITION } from './TextInput.model';
import { formLeftClassname, formRightClassname } from './Input/Input.config';

export const detectInputPosition = (formPosition?: INPUT_POSITION) => {
    switch (formPosition) {
        case INPUT_POSITION.LEFT:
            return formLeftClassname;
        case INPUT_POSITION.RIGHT:
            return formRightClassname;
        default:
            return css.input;
    }
};

export const isFieldEmpty = (value: string) => value.trim().length === 0;

const EMAIL_VALIDATOR_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isValidEmail = (email: string) => !EMAIL_VALIDATOR_REGEXP.test(String(email).toLowerCase());
