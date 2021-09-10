import { ErrorModel } from '@utilities';
import _ from 'lodash';
import { createSelector, ParametricSelector, Selector } from 'reselect';
import { IErrorsState } from './ErrorsReducer';

export class ErrorSelector {
  public static selectErrorsForSnackbar(state: _IStore): ErrorModel[] {
    return _.filter(state.errors, (error) => error.notifications?.snackbar !== undefined);
  }

  public static hasErrors = (errorState: IErrorsState, actionTypes: string[]): boolean => {
    return actionTypes.map((actionType: string) => errorState[actionType]).filter(Boolean).length > 0;
  };
}

export const selectErrorsForSnackbar: Selector<_IStore, ErrorModel[]> = createSelector(
  (state: _IStore) => state,
  ErrorSelector.selectErrorsForSnackbar,
);
export const hasErrors: ParametricSelector<_IStore, string[], boolean> = createSelector(
  (state: _IStore) => state.errors,
  (state: _IStore, actionTypes: string[]) => actionTypes,
  ErrorSelector.hasErrors,
);

interface _IStore {
  errors: IErrorsState;
}