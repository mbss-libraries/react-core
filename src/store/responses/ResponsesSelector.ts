/** @Version 1.0 */

import { createSelector, ParametricSelector } from 'reselect';
import { BaseModel } from 'sjs-base-model';
import { IResponsesState } from './ResponsesReducer';

export class ResponsesSelector {
  public static selectResponse(state: IResponsesState, type: string): BaseModel | undefined {
    return state[type] as BaseModel;
  }
}

const _selectResponse: ParametricSelector<_IStore, string, BaseModel | undefined> = createSelector(
  (state: _IStore) => state.responses,
  (state: _IStore, type: string) => type,
  ResponsesSelector.selectResponse,
);

export const selectResponse = <T>(state: _IStore, type: string) => (_selectResponse(state, `${type}_FINISHED`) as unknown) as T | undefined;

interface _IStore {
  responses: IResponsesState;
}
