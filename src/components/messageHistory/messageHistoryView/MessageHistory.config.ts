import classNames from 'classnames';
import css from "./MessageHistoryView.module.scss";

export const statusClassNameError = classNames(css.tdStatus, css.tdStatus_error);
export const statusClassNameSuccess = classNames(css.tdStatus, css.tdStatus_success);
export const statusClassNameInProgress = classNames(css.tdStatus, css.tdStatus_inprogress);
