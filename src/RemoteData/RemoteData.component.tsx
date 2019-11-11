import React, { PureComponent } from 'react'
import { isNull } from '../utils/utils';
import { TNullOrError } from '../models/sharedModels';
import css from './RemoteData.module.scss';

export enum RemoteDataStatus {
    INITIAL = '* INITIAL *',
    LOADING = '* LOADING *',
    SUCCESS = '* SUCCESS *',
    FAILURE = '* FAILURE *',
}

class RdErrorComponent extends PureComponent<{error: TNullOrError}> {
    render() {
        const {error} = this.props;
        return ( <div className={css.renderComponent}>
                {
                    // @ts-ignore
                    isNull(error) ? 'Error happened' : error.message
                }
            </div>
            )
    }
}
class RdLoadingComponent extends PureComponent {
    render() {
        return <div className={css.renderComponent}>LOADING</div>
    }
}

type TWithLoadingProps = {
    status: RemoteDataStatus,
    error: TNullOrError
    children: any
}

export class WithLoading extends PureComponent<TWithLoadingProps>{
    render() {
        const { status, error, children } = this.props;
        const componentToRender = rdDetectComponentToRender(status, children, error);
        return <div className={css.withLoadingWrapper}>{componentToRender}</div>
    }
}

function rdDetectComponentToRender<P>(status: RemoteDataStatus, ComponentToRender: React.ReactNode, error: TNullOrError) {
    switch (status) {
        case RemoteDataStatus.FAILURE:
            return <RdErrorComponent error={error}/>;
        case RemoteDataStatus.LOADING:
            return <RdLoadingComponent/>;
        case RemoteDataStatus.SUCCESS:
            return ComponentToRender;
        case RemoteDataStatus.INITIAL:
            return ComponentToRender
    }
}
