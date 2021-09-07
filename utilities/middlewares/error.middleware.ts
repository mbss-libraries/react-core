/* eslint-disable @typescript-eslint/no-explicit-any */

import { IAction, ErrorModel } from 'src/utilities';
import { Dispatch, Middleware } from 'redux';
import ErrorsAction from 'src/store/errors/ErrorsAction';

const errorMiddleware =
  (): Middleware =>
  () =>
  (next: Dispatch) =>
  (action: IAction<any>): void => {
    if (action.error) {
      const errorAction = action as Required<IAction<ErrorModel>>;
      next(ErrorsAction.add(errorAction.payload));
    }

    next(action);
  };

export default errorMiddleware;
