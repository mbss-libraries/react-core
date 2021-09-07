/** @Version 1.0 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionUtility, ErrorModel, ReduxDispatch } from 'src/utilities';
import ModelsEffect, { IRequestAutoLoadModelsPayload, IRequestAutosavePayload } from './ModelsEffect';
import { TModelNames, TModels } from './ModelsReducer';
import RequestModelsResponseModel from './RequestModelsResponseModel';

type ActionUnion = void | ErrorModel | RequestModelsResponseModel;

export default class ModelsAction {
  public static readonly DELETE_MODEL: string = 'ModelsAction.DELETE_MODEL';
  public static readonly DELETE_MODEL_FINISHED: string = 'ModelsAction.DELETE_MODEL_FINISHED';
  public static deleteModel(path: string): any {
    return async (dispatch: ReduxDispatch<ActionUnion>) => {
      await ActionUtility.createThunkEffect<RequestModelsResponseModel>(dispatch, ModelsAction.DELETE_MODEL, ModelsEffect.deleteModel, path);
    };
  }

  public static readonly STORE_MODELS: string = 'ModelsAction.STORE_MODELS';
  public static storeModels(models: { [key in TModelNames]?: TModels[] }, override?: TModelNames[]) {
    const payload: IStoreModelsPayload = { models, override };
    return ActionUtility.createAction(ModelsAction.STORE_MODELS, payload);
  }

  public static readonly DELETE_MODELS: string = 'ModelsAction.DELETE_MODELS';
  public static deleteModels(models: { [key in TModelNames]?: string[] }) {
    return ActionUtility.createAction(ModelsAction.DELETE_MODELS, models);
  }

  public static readonly REQUEST_AUTOSAVE: string = 'ModelsAction.REQUEST_AUTOSAVE';
  public static readonly REQUEST_AUTOSAVE_FINISHED: string = 'ModelsAction.REQUEST_AUTOSAVE_FINISHED';
  public static requestAutosave(payload: IRequestAutosavePayload): any {
    return async (dispatch: ReduxDispatch<ActionUnion>) => {
      await ActionUtility.createThunkEffect<RequestModelsResponseModel>(
        dispatch,
        ModelsAction.REQUEST_AUTOSAVE,
        ModelsEffect.requestAutosave,
        payload,
      );
    };
  }

  public static readonly REQUEST_AUTO_LOAD_MODELS: string = 'ModelsAction.REQUEST_AUTO_LOAD_MODELS';
  public static readonly REQUEST_AUTO_LOAD_MODELS_FINISHED: string = 'ModelsAction.REQUEST_AUTO_LOAD_MODELS_FINISHED';
  public static requestAutoLoadModels(payload: IRequestAutoLoadModelsPayload): any {
    return async (dispatch: ReduxDispatch<ActionUnion>) => {
      await ActionUtility.createThunkEffect<RequestModelsResponseModel>(
        dispatch,
        ModelsAction.REQUEST_AUTO_LOAD_MODELS,
        ModelsEffect.requestAutoLoadModels,
        payload,
      );
    };
  }
}

export interface IStoreModelsPayload {
  models: { [key in TModelNames]?: TModels[] };
  override?: TModelNames[];
}
