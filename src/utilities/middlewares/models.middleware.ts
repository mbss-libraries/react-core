/* eslint-disable @typescript-eslint/no-explicit-any */

import { IAction } from 'src/utilities';
import _, { isObject } from 'lodash';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { ICoreStore, IModelsState, ModelsAction } from '@store';
import { BaseModel } from 'sjs-base-model';
import { IBaseModel } from '@helpers';

export const modelsMiddleware = (
  modelNames: string[],
  onAuthUserUpdate: (payload: IBaseModel<BaseModel>) => any,
  options?: IModelsMiddlewareOptions,
): Middleware => (store: MiddlewareAPI<Dispatch, _IStore>) => (next: Dispatch) => (action: IAction<any>): void => {
  const userModelName = options?.userModelName ?? 'User';
  const pathToAuthUser = options?.pathToAuthUser ?? 'authentication.authUser';

  if (isObject(action.payload) && action.meta?.ignoreModelMiddleware !== true) {
    if (Object.keys(action.payload).includes('delete') && action.payload['delete'] !== undefined) {
      const models: { [key: string]: string[] } = action.payload['delete'];
      next(ModelsAction.deleteModels(models));
    }
    const foundModels = _.intersection(Object.keys(action.payload), modelNames);
    const state = store.getState();
    if (foundModels.length > 0) {
      const models: { [key: string]: IBaseModel<BaseModel>[] } = {};
      foundModels.forEach((name) => {
        if (name === userModelName) {
          const authUser = _.get(state, pathToAuthUser) as IBaseModel<BaseModel> | undefined;
          const user = _.find(action.payload[name] as IBaseModel<BaseModel>[], (user) => user.id === authUser?.id);
          if (user && user.updatedAt !== authUser?.updatedAt) {
            next(onAuthUserUpdate(user));
          }
        }
        models[name] = action.payload[name];
      });
      next(
        ModelsAction.storeModels<IBaseModel<BaseModel>>({ models, override: _.get(action.payload, 'override', []) }),
      );
    }
  }

  next(action);
};
interface _IStore extends ICoreStore {
  models: IModelsState<unknown>;
}

interface IModelsMiddlewareOptions {
  pathToAuthUser?: string;
  userModelName?: string;
}
