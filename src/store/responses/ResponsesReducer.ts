/** @Version 1.0 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { baseReducer, IAction } from '@utilities';
import _ from 'lodash';
import { Reducer } from 'redux';

const initialState: IResponsesState = {};
export const responsesReducer: Reducer = baseReducer(initialState, {});

export interface IResponsesState {
  [key: string]: any;
}

export const buildResponsesReducer = (types: string[], items: IReducerItems): Reducer => {
  const generatedItems: IReducerItems = {};
  _.forEach(
    types,
    (type) =>
      (generatedItems[type] = (state: IResponsesState, action: IAction<unknown>) => {
        return {
          ...state,
          [action.type]: action.payload,
        };
      }),
  );
  return baseReducer(initialState, { ...generatedItems, ...items });
};

export interface IReducerItems {
  [key: string]: TReducerItem;
}
export type TReducerItem = (state: IResponsesState, action: IAction<unknown>) => IResponsesState;
