import _ from 'lodash';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ModelsAction from 'src/store/models/ModelsAction';
import useTimeout from './useTimeout';

interface IDataItem {
  id?: string | string[];
  exists: boolean;
  path: string;
  options?: {
    extended?: boolean;
  };
}
interface IOptions {
  timeout: number;
}
export const useAutoLoadModels = (data: IDataItem[], options: IOptions = { timeout: 100 }) => {
  const { timeout } = options;
  const dispatch: Dispatch = useDispatch();

  const fetchData = useCallback(() => {
    _.forEach(data, (item) => {
      if (!item.exists && item.id) {
        dispatch(
          ModelsAction.requestAutoLoadModels({
            ids: _.isArray(item.id) ? item.id : undefined,
            path: item.path,
            options: { extended: item.options?.extended },
          }),
        );
      }
    });
  }, [data, dispatch]);

  useTimeout(fetchData, timeout);
};
