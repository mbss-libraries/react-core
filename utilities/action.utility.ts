/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorModel, HttpError401Model, IAction, IActionMeta, ReduxDispatch } from 'src/utilities';

export const createThunkEffect = async <P>(
  dispatch: ReduxDispatch<undefined | P | ErrorModel>,
  actionType: string,
  effect: (...args: any[]) => Promise<P | ErrorModel>,
  args: any,
  meta?: IActionMeta,
): Promise<P | ErrorModel> => {
  dispatch(createAction<undefined>(actionType));

  const model: P | ErrorModel = await effect(args);
  const isError: boolean = model instanceof ErrorModel;

  //* ----- If the response is 401 = Unauthorized the user logged out -----
  if (model instanceof ErrorModel && model.raw instanceof HttpError401Model) {
    dispatch({ type: 'AuthenticationAction.SET_LOGOUT_MANUAL' });
  }

  //* ----- If the response is 500 = Internal server error the user logged out -----
  // if (model instanceof ErrorModel && model.status === 500) {
  // dispatch(AuthenticationAction.setLogoutManual());
  // ToDo: useHistory not working here
  // const history = useHistory();
  // history.push(`/500`);
  // }

  //* ----- Searching for models to delete froms store -----
  // if (Object.keys(model).includes('delete') && model['delete'] !== undefined) {
  //   const models: { [key in TModelNames]?: string[] } = model['delete'];
  //   dispatch(ModelsAction.deleteModels(models));
  // }

  //* ----- If an "identifier" is specified it will be passed as "meta" to the reducer -----
  // let identifier: string | undefined = undefined;
  // if (_.keys(...args).includes('identifier')) {
  //   identifier = args[0]['identifier'];
  // }

  dispatch(createAction<P | ErrorModel>(`${actionType}_FINISHED`, model, isError, meta));

  return model;
};

export const createAction = <T = undefined>(type: string, payload?: T, error = false, meta: IActionMeta = {}): IAction<T> => {
  return { type, payload, error, meta };
};
