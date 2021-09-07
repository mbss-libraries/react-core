import { ErrorModel, HttpUtility, IConstructor } from 'src/utilities';
import { AxiosResponse } from 'axios';

export type FlattenIfArray<T> = T extends (infer R)[] ? R : T;
type SingleItemOrArray<T> = T extends [] ? T[] : T;

export const getToModel = async <T>(
  Model: IConstructor<FlattenIfArray<T>>,
  endpoint: string,
  params?: unknown,
): Promise<SingleItemOrArray<T> | ErrorModel> => {
  const response: AxiosResponse | ErrorModel = await HttpUtility.get(endpoint, params);

  return _restModelCreator<T>(Model, response);
};

export const postToModel = async <T>(
  Model: IConstructor<FlattenIfArray<T>>,
  endpoint: string,
  data?: unknown,
): Promise<SingleItemOrArray<T> | ErrorModel> => {
  const response: AxiosResponse | ErrorModel = await HttpUtility.post(endpoint, data);

  return _restModelCreator<T>(Model, response);
};

export const patchToModel = async <T>(
  Model: IConstructor<FlattenIfArray<T>>,
  endpoint: string,
  data?: unknown,
): Promise<SingleItemOrArray<T> | ErrorModel> => {
  const response: AxiosResponse | ErrorModel = await HttpUtility.patch(endpoint, data);

  return _restModelCreator<T>(Model, response);
};

export const putToModel = async <T>(
  Model: IConstructor<FlattenIfArray<T>>,
  endpoint: string,
  data?: unknown,
): Promise<SingleItemOrArray<T> | ErrorModel> => {
  const response: AxiosResponse | ErrorModel = await HttpUtility.put(endpoint, data);

  return _restModelCreator<T>(Model, response);
};

export const deleteToModel = async <T>(
  Model: IConstructor<FlattenIfArray<T>>,
  endpoint: string,
  params?: unknown,
): Promise<SingleItemOrArray<T> | ErrorModel> => {
  const response: AxiosResponse | ErrorModel = await HttpUtility.del(endpoint, params);

  return _restModelCreator<T>(Model, response);
};

const _restModelCreator = <T>(Model: IConstructor<FlattenIfArray<T>>, response: AxiosResponse | ErrorModel): SingleItemOrArray<T> | ErrorModel => {
  if (response instanceof ErrorModel) {
    return response;
  }

  return !Array.isArray(response.data)
    ? new Model(response.data)
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (response.data.map((json) => new Model(json)) as any);
};
