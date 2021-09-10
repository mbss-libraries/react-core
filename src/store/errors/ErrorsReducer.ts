import { baseReducer, IAction, ErrorModel } from 'src/utilities';
import { Reducer } from 'redux';
import ErrorsAction from './ErrorsAction';

export const initialState: IErrorsState = {};

export const errorsReducer: Reducer = baseReducer(initialState, {
  [ErrorsAction.ADD](state: IErrorsState, action: IAction<ErrorModel>): IErrorsState {
    if (action.payload) {
      return { ...state, ...{ [action.payload.id]: action.payload } };
    }
    return { ...state };
  },
  [ErrorsAction.REMOVE](state: IErrorsState, action: IAction<string>): IErrorsState {
    const _state = { ...state };
    if (action.payload) {
      delete _state[action.payload];
    }
    return _state;
  },
});

export interface IErrorsState {
  readonly [key: string]: ErrorModel;
}

// /*
//  * Note: This reducer breaks convention on how reducers should be setup.
//  */
// import IErrorState from './models/IErrorState';
// import IAction from '../../models/IAction';
// import * as ErrorAction from './ErrorAction';
// import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
// import { Reducer } from 'redux';
// import _ from 'lodash';

// export const initialState: IErrorState = {};

// const errorReducer: Reducer = (state: IErrorState = initialState, action: IAction<any>): IErrorState => {
//   const { type, error, payload } = action;
//   /*
//    * Add a new manual created HttpErrorResponseModel.
//    */
//   if (type === ErrorAction.ADD_MANUAL_ERROR) {
//     const _payload = payload as HttpErrorResponseModel;
//     // Create a new state without the error that has the same id as the payload.
//     return { ...state, [type]: _payload };
//   }

//   /*
//    * Removes an HttpErrorResponseModel by it's id that is in the action payload.
//    */
//   if (type === ErrorAction.REMOVE) {
//     // Create a new state without the error that has the same id as the payload.
//     return Object.entries(state).reduce((newState, [key, value]: [string, HttpErrorResponseModel]) => {
//       if (value.id !== payload) {
//         newState[key] = value;
//       }

//       return newState;
//     }, {});
//   }

//   /*
//    * Removes all errors by returning the initial state which is an empty object.
//    */
//   if (type === ErrorAction.CLEAR_ALL) {
//     return initialState;
//   }

//   /*
//    * True if the action type has the key word '_FINISHED' then the action is finished.
//    */
//   const isFinishedRequestType = type.includes('_FINISHED');
//   /*
//    * True if the action type has the key word 'REQUEST_' and not '_FINISHED'.
//    */
//   const isStartRequestType = type.includes('REQUEST_') && !isFinishedRequestType;

//   /*
//    * If an action is started we want to remove any old errors because there is a new action has been re-dispatched.
//    */
//   if (isStartRequestType) {
//     // Using ES7 Object Rest Spread operator to omit properties from an object.
//     const { [`${type}_FINISHED`]: value, ...stateWithoutFinishedType } = state;

//     return stateWithoutFinishedType;
//   }

//   /*
//    * True if the action is finished and the error property is true.
//    */
//   const isError: boolean = isFinishedRequestType && Boolean(error);

//   /*
//    * For any start and finished actions that don't have errors we return the current state.
//    */
//   if (isError === false) {
//     return state;
//   }

//   /*
//    * At this point the "type" will be a finished action type (e.g. "SomeAction.REQUEST_*_FINISHED").
//    * The payload will be a HttpErrorResponseModel.
//    */
//   return {
//     ...state,
//     [type]: payload,
//   };
// };

// export default errorReducer;