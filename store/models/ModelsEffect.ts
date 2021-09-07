/** @Version 1.0 */

import { IModelsState, TModelNames } from './ModelsReducer';
import _ from 'lodash';
import RequestModelsResponseModel from './RequestModelsResponseModel';
import { EffectUtility, ErrorModel } from 'src/utilities';
import { IGlobalQueryOptions } from '@helpers';

export default class ModelsEffect {
  public static async deleteModel(path: string): Promise<RequestModelsResponseModel | ErrorModel> {
    return EffectUtility.deleteToModel<RequestModelsResponseModel>(RequestModelsResponseModel, path);
  }
  public static async requestAutosave(payload: IRequestAutosavePayload): Promise<RequestModelsResponseModel | ErrorModel> {
    return EffectUtility.patchToModel<RequestModelsResponseModel>(RequestModelsResponseModel, payload.url, payload.data);
  }
  public static async requestAutoLoadModels(payload: IRequestAutoLoadModelsPayload): Promise<RequestModelsResponseModel | ErrorModel> {
    const endpoint: string = payload.options?.extended ? `${payload.path}?extended=true` : payload.path;
    return EffectUtility.getToModel<RequestModelsResponseModel>(RequestModelsResponseModel, endpoint);
  }
}

export interface IRequestAutosavePayload {
  data: { [key: string]: unknown };
  url: string;
}

export interface IRequestAutoLoadModelsPayload {
  ids?: string[];
  path: string;
  options?: IGlobalQueryOptions;
}

export type IRequestModelsExists = {
  exists: TModelsExists;
};

export type TModelsExists = {
  [key in TModelNames]?: string[] | 'all';
};
export type TModelsExistsUpdatedAt = {
  [key in TModelNames]?: { [key: string]: string };
};

export const getExistsModels = (models: TModelNames[], state: IModelsState): TModelsExistsUpdatedAt => {
  const payload: TModelsExistsUpdatedAt = {};

  models.forEach((model) => {
    payload[model] = {};
    _.forEach(state[model], (item, key) => {
      if (Object.keys(payload).includes(model) && item.updatedAt) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        payload[model]![key] = item.updatedAt.toString();
      }
    });
  });

  return payload;
};
