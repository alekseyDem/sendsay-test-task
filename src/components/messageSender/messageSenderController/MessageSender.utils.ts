import { TVALIDATOR_RULE } from './MessageSender.model';


export const getErrorMessageFromValidator = <T extends unknown>(rule: TVALIDATOR_RULE<T>, data: T): string => rule.validator(data) ? rule.errorMessage : '';
export const getOneErrorMessageFromErrorList = (messages: string[]) => messages.filter(errorMessage => !!errorMessage)[0];
