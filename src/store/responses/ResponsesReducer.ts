/** @Version 1.0 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { baseReducer } from '@utilities';
import { Reducer } from 'redux';

const initialState: IResponsesState = {};
export const responsesReducer: Reducer = baseReducer(initialState, {});

export interface IResponsesState {
  [key: string]: any;
}
