/* eslint-disable @typescript-eslint/no-explicit-any */

import { TValueOf } from '@helpers';
import { ActionUtility, ErrorModel, ReduxDispatch } from '@utilities';
import { EmptyResponseModel, IRequestAutosavePayload, ModelsEffect } from '@store';

type ActionUnion = void | EmptyResponseModel | ErrorModel;

export class ModelsAction<T> {
  // public static readonly DELETE_MODEL: string = 'ModelsAction.DELETE_MODEL';
  // public static readonly DELETE_MODEL_FINISHED: string = 'ModelsAction.DELETE_MODEL_FINISHED';
  // public static deleteModel(path: string): any {
  //   return async (dispatch: ReduxDispatch<ActionUnion>) => {
  //     await ActionUtility.createThunkEffect<EmptyResponseModel>(dispatch, ModelsAction.DELETE_MODEL, ModelsEffect.deleteModel, path);
  //   };
  // }

  /**
   * T => TModels
   */
  public static readonly STORE_MODELS: string = 'ModelsAction.STORE_MODELS';
  public static storeModels<T>(payload: IStoreModelsPayload<T>) {
    return ActionUtility.createAction(ModelsAction.STORE_MODELS, payload);
  }

  /**
   * T => TModels
   */
  public static readonly DELETE_MODELS: string = 'ModelsAction.DELETE_MODELS';
  public static deleteModels<T>(models: { [key in keyof T]?: string[] }) {
    return ActionUtility.createAction(ModelsAction.DELETE_MODELS, models);
  }

  public static readonly REQUEST_AUTOSAVE: string = 'ModelsAction.REQUEST_AUTOSAVE';
  public static readonly REQUEST_AUTOSAVE_FINISHED: string = 'ModelsAction.REQUEST_AUTOSAVE_FINISHED';
  public static requestAutosave(payload: IRequestAutosavePayload): any {
    return async (dispatch: ReduxDispatch<ActionUnion>) => {
      await ActionUtility.createThunkEffect<EmptyResponseModel>(dispatch, ModelsAction.REQUEST_AUTOSAVE, ModelsEffect.requestAutosave, payload);
    };
  }

  // public static readonly REQUEST_AUTO_LOAD_MODELS: string = 'ModelsAction.REQUEST_AUTO_LOAD_MODELS';
  // public static readonly REQUEST_AUTO_LOAD_MODELS_FINISHED: string = 'ModelsAction.REQUEST_AUTO_LOAD_MODELS_FINISHED';
  // public static requestAutoLoadModels(payload: IRequestAutoLoadModelsPayload): any {
  //   return async (dispatch: ReduxDispatch<ActionUnion>) => {
  //     await ActionUtility.createThunkEffect<RequestModelsResponseModel>(
  //       dispatch,
  //       ModelsAction.REQUEST_AUTO_LOAD_MODELS,
  //       ModelsEffect.requestAutoLoadModels,
  //       payload,
  //     );
  //   };
  // }
}

/**
 * T => TModels
 */
export interface IStoreModelsPayload<T> {
  models: { [key in keyof T]?: TValueOf<T[key]>[] };
  override?: [keyof T];
}
