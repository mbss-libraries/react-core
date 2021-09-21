/** @Version 1.0 */

import { identity } from 'lodash';
import { createSelector, ParametricSelector, Selector } from 'reselect';
import { BaseModel } from 'sjs-base-model';
import { IModelsState } from '@store';

export class ModelsSelector {
  public static selectModelById(state: _IStore<unknown>, payload: { model: string; id: string }): any | undefined {
    if (Object.keys(state.models).includes(payload.model) && Object.keys(state.models[payload.model]).includes(payload.id)) {
      return state.models[payload.model][payload.id];
    }
    return undefined;
  }
}

/**
 * T => Model class that should returned
 * M => TModelNames
 * @param state
 * @param type
 * @returns
 */

export const selectModelById = <T extends BaseModel, M extends string>(): ParametricSelector<
  _IStore<unknown>,
  { model: M; id: string },
  T | undefined
> =>
  createSelector(
    (state: _IStore<unknown>) => state,
    (state: _IStore<unknown>, payload: { model: M; id: string }) => payload,
    ModelsSelector.selectModelById,
  );

interface _IStore<T> {
  models: IModelsState<T>;
}
