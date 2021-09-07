/** @Version 1.0 */

/*
 * Note: This reducer breaks convention on how reducers should be setup.
 */
import { IAction } from 'src/utilities';
import { Reducer } from 'redux';

export const initialState: IRequestingState = {};

const requestingReducer: Reducer = (state: IRequestingState = initialState, action: IAction<unknown>): IRequestingState => {
  // We only take actions that include 'REQUEST_' in the type.
  const isRequestType: boolean = action.type.includes('REQUEST_');

  if (isRequestType === false) {
    return state;
  }

  // Remove the string '_FINISHED' from the action type so we can use the first part as the key on the state.
  const requestName: string = action.type.replace('_FINISHED', '');
  // If the action type includes '_FINISHED'. The boolean value will be false. Otherwise we
  // assume it is a starting request and will be set to true.
  const isFinishedRequestType: boolean = action.type.includes('_FINISHED');

  return {
    ...state,
    [requestName]: isFinishedRequestType === false,
  };
};

export default requestingReducer;

export interface IRequestingState {
  readonly [key: string]: boolean;
}
