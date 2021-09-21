/** @Version 1.0 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { baseReducer, IAction, ReducerMethods } from '@utilities';
import _ from 'lodash';
import { Reducer } from 'redux';
import { IStoreModelsPayload, ModelsAction } from '@store';

/**
 * T => TModels
 */
export const buildModelsMethods = <T>(): ReducerMethods<any> => {
  return {
    [ModelsAction.STORE_MODELS](state: IModelsState<T>, action: IAction<IStoreModelsPayload<T>>): IModelsState<T> {
      const _state: { [key: string]: any } = {};
      _.forEach(action.payload?.models, (models, type) => {
        if (models !== undefined) {
          _state[type] = action.payload?.override?.includes(type as keyof T) ? {} : { ...state[type] };
          _.forEach(models, (model: T) => {
            _state[type][model['id']] = model;
          });
        }
      });
      return { ...state, ..._state };
    },
    [ModelsAction.DELETE_MODELS](state: IModelsState<T>, action: IAction<{ [key in keyof T]?: string[] }>): IModelsState<T> {
      const _state = { ...state };
      _.forEach(action.payload, (ids, type) => {
        if (ids !== undefined) {
          const filtered = _.filter(_state[type], (model) => !ids.includes(model.id));
          _state[type] = _.keyBy(filtered, 'id') as any;
        }
      });

      return _state;
    },
  };
};

/**
 * T => TModels
 */
export type IModelsState<T> = {
  [key in keyof T]: { [key: string]: T[key] };
};
