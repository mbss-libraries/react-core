import { ErrorModel } from 'src/utilities';
import _ from 'lodash';
import { createSelector, ParametricSelector, Selector } from 'reselect';
import { IStore } from 'src/store/reducer';
import { IErrorsState } from './ErrorsReducer';

export class ErrorSelector {
  public static selectErrorsForSnackbar(state: IStore): ErrorModel[] {
    return _.filter(state.errors, (error) => error.notifications?.snackbar !== undefined);
  }

  public static hasErrors = (errorState: IErrorsState, actionTypes: string[]): boolean => {
    return actionTypes.map((actionType: string) => errorState[actionType]).filter(Boolean).length > 0;
  };
}

export const selectErrorsForSnackbar: Selector<IStore, ErrorModel[]> = createSelector(
  (state: IStore) => state,
  ErrorSelector.selectErrorsForSnackbar,
);
export const hasErrors: ParametricSelector<IStore, string[], boolean> = createSelector(
  (state: IStore) => state.errors,
  (state: IStore, actionTypes: string[]) => actionTypes,
  ErrorSelector.hasErrors,
);
