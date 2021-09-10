import { ReducersMapObject } from 'redux';
import { responsesReducer, requestingReducer, errorsReducer, IResponsesState, IRequestingState, IErrorsState } from 'src';

export const coreReducerMap: ReducersMapObject<ICoreStore> = {
  responses: responsesReducer,
  requesting: requestingReducer,
  errors: errorsReducer,
};

export interface ICoreStore {
  readonly responses: IResponsesState;
  readonly requesting: IRequestingState;
  readonly errors: IErrorsState;
}
