import { ErrorModel, IAction, ActionUtility } from '@utilities';

export default class ErrorsActionBase {
  public static readonly ADD: string = 'ErrorsAction.ADD';
  public static add(error: ErrorModel): IAction<ErrorModel> {
    return ActionUtility.createAction(ErrorsActionBase.ADD, error);
  }

  public static readonly REMOVE: string = 'ErrorsAction.REMOVE';
  public static remove(id: string): IAction<string> {
    return ActionUtility.createAction(ErrorsActionBase.REMOVE, id);
  }
}
