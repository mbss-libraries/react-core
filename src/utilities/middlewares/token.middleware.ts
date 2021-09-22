import { IAction } from 'src/utilities';
import axios from 'axios';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

export const tokenMiddleware = (): Middleware => (store: MiddlewareAPI<Dispatch, _IStore>) => (next: Dispatch) => (
  action: IAction<unknown>,
): void => {
  const token = store.getState().authentication.token;
  if (axios.defaults.headers.common['Authorization'] !== token) {
    setToken(token);
  }
  next(action);
};

const setToken = (token: string | undefined): void => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = undefined;
  }
};

interface _IStore {
  authentication: { token?: string };
}
