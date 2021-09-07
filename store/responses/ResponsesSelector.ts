/** @Version 1.0 */

import { createSelector, ParametricSelector } from 'reselect';
import { BaseModel } from 'sjs-base-model';
import { IStore } from '../reducer';
import { IResponsesState } from './ResponsesReducer';

export class ResponsesSelector {
  public static selectResponse(state: IResponsesState, type: string): BaseModel | undefined {
    return state[type] as BaseModel;
  }
}

const _selectResponse: ParametricSelector<IStore, string, BaseModel | undefined> = createSelector(
  (state: IStore) => state.responses,
  (state: IStore, type: string) => type,
  ResponsesSelector.selectResponse,
);

export const selectResponse = <T>(state: IStore, type: string) => _selectResponse(state, `${type}_FINISHED`) as unknown as T | undefined;
