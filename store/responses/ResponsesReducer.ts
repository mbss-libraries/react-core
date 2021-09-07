/** @Version 1.0 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { baseReducer, IAction } from '@utilities';
import { Reducer } from 'redux';
import AuthenticationAction from '../authentication/AuthenticationAction';

export const initialState: IResponsesState = {};

export const responsesReducer: Reducer = baseReducer(initialState, {
  [AuthenticationAction.REQUEST_LOGIN_METHODS_FINISHED](state: IResponsesState, action: IAction<any>): IResponsesState {
    return { ...state, [action.type]: action.payload };
  },
});

export interface IResponsesState {
  [key: string]: any;
}
