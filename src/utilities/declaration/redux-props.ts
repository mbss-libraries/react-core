import { IAction } from '@utilities';
import { DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';

export type ReduxDispatch<P> = Dispatch<IAction<P>>;

export type ReduxDispatchProp<P> = DispatchProp<IAction<P>>;
