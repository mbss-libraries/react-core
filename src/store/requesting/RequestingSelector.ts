/** @Version 1.0 */

import { createSelector, ParametricSelector } from 'reselect';
import { IRequestingState } from './RequestingReducer';

const _selectRequesting = (requestingState: IRequestingState, actionTypes: string[]): boolean => {
  return actionTypes.some((actionType: string) => requestingState[actionType]);
};

export const selectRequesting: ParametricSelector<_IStore, string[], boolean> = createSelector(
  (state: _IStore) => state.requesting,
  (state: _IStore, actionTypes: string[]) => actionTypes,
  _selectRequesting,
);

const _selectRequestingById = (requestingState: IRequestingState, actionTypes: { type: string; id: string }): boolean => {
  return requestingState[`${actionTypes.type}_${actionTypes.id}`] ?? false;
};
export const selectRequestingById: ParametricSelector<_IStore, { type: string; id: string }, boolean> = createSelector(
  (state: _IStore) => state.requesting,
  (state: _IStore, actionTypes: { type: string; id: string }) => actionTypes,
  _selectRequestingById,
);

interface _IStore {
  requesting: IRequestingState;
}
