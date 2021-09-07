import { ErrorModel, IAction, ActionUtility } from 'src/utilities';

export default class ErrorsAction {
  public static readonly ADD: string = 'ErrorsAction.ADD';
  public static add(error: ErrorModel): IAction<ErrorModel> {
    return ActionUtility.createAction(ErrorsAction.ADD, error);
  }

  public static readonly REMOVE: string = 'ErrorsAction.REMOVE';
  public static remove(id: string): IAction<string> {
    return ActionUtility.createAction(ErrorsAction.REMOVE, id);
  }
}

// export const REMOVE: string = 'ErrorAction.REMOVE';
// export const removeById = (id: string): IAction<string> => {
//   return ActionUtility.createAction(REMOVE, id);
// };

// export const CLEAR_ALL: string = 'ErrorAction.CLEAR_ALL';
// export const clearAll = (): IAction<undefined> => {
//   return ActionUtility.createAction(CLEAR_ALL);
// };

// export const ADD_MANUAL_ERROR: string = 'ErrorAction.ADD_MANUAL_ERROR';
// export const addManualError = (error: HttpErrorResponseModel): IAction<HttpErrorResponseModel> => {
//   return ActionUtility.createAction(ADD_MANUAL_ERROR, error);
// };
