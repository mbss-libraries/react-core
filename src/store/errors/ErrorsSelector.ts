import { ErrorModel } from '@utilities';
import _ from 'lodash';
import { createSelector, ParametricSelector, Selector } from 'reselect';
import { IErrorsState } from './ErrorsReducer';

export class ErrorSelector {
  public static selectErrorsForSnackbar(state: _IStore): ErrorModel[] {
    return _.filter(state.errors, (error) => error.notifications?.snackbar !== undefined);
  }

  public static selectFirstErrorByActionType = (errorState: IErrorsState, actionType: string): ErrorModel | undefined => {
    return _.first(
      _.orderBy(
        _.filter(errorState, (error) => error.actionType === actionType),
        'timestamp',
      ),
    );
  };
}

export const selectErrorsForSnackbar: Selector<_IStore, ErrorModel[]> = createSelector(
  (state: _IStore) => state,
  ErrorSelector.selectErrorsForSnackbar,
);

export const selectFirstErrorByActionType: ParametricSelector<_IStore, string, ErrorModel | undefined> = createSelector(
  (state: _IStore) => state.errors,
  (state: _IStore, actionType: string) => actionType,
  ErrorSelector.selectFirstErrorByActionType,
);

interface _IStore {
  errors: IErrorsState;
}
