/** @Version 1.0 */
/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { User } from '@models';
import { IAction } from '@utilities';
import { baseReducer } from './../../utilities/base.reducer';
import _ from 'lodash';
import { Reducer } from 'redux';
import ModelsAction, { IStoreModelsPayload } from './ModelsAction';

export const initialState: IModelsState = {
  User: {},
};

export const modelsReducer: Reducer = baseReducer(initialState, {
  [ModelsAction.STORE_MODELS](state: IModelsState, action: IAction<IStoreModelsPayload>): IModelsState {
    const _state: { [key: string]: any } = {};
    _.forEach(action.payload?.models, (models, type) => {
      if (models !== undefined) {
        const modelName = type as TModelNames;
        _state[modelName] = action.payload?.override?.includes(modelName) ? {} : { ...state[modelName] };
        _.forEach(models, (model: TModels) => {
          _state[modelName][model.id] = model;
        });
      }
    });
    return { ...state, ..._state };
  },

  [ModelsAction.DELETE_MODELS](state: IModelsState, action: IAction<{ [key in TModelNames]?: string[] }>): IModelsState {
    const _state = { ...state };
    _.forEach(action.payload, (ids, type) => {
      const modelName = type as TModelNames;
      if (ids !== undefined) {
        const filtered = _.filter(_state[modelName], (model) => !ids.includes(model.id));
        _state[modelName] = _.keyBy(filtered, 'id') as any;
      }
    });

    return _state;
  },
});

export interface IModelsState {
  User: { [key: string]: User };
}

export enum EModels {
  User = 'User',
}

export type TModels = User;
export type TModelNames = keyof IModelsState;
