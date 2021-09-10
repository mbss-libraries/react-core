/* eslint-disable @typescript-eslint/no-explicit-any */
// import { IConstructor } from 'src/utilities';
import _ from 'lodash';
import { useMemo } from 'react';
import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Dispatch } from 'redux';
// import { hasErrors } from 'src/store/errors/ErrorsSelector';
// import { FlattenIfArray } from 'src/utilities/effect.utility';
// import { IStore } from 'src/store/reducer';
// import { selectRequesting } from 'src/store/requesting/RequestingSelector';
// import ModelsAction from 'src/store/models/ModelsAction';

interface IOptions<T> {
  // type: IConstructor<FlattenIfArray<T>>;
  url: string;
  debounce?: number;
}
export const useAutosave = <T>(m: T, options: IOptions<T>) => {
  // const { type, url, debounce } = options;
  // const dispatch: Dispatch = useDispatch();
  // const [model, setModel] = useState(new type(m));
  // const [queue, setQueue] = useState<{ [key: string]: unknown }>({ id: model['id'] });
  // const isRequesting = useSelector((state: IStore) => selectRequesting(state, [ModelsAction.REQUEST_AUTOSAVE]));
  // const isError = useSelector((state: IStore) => hasErrors(state, [ModelsAction.REQUEST_AUTOSAVE_FINISHED]));
  // useEffect(() => setModel(new type(m)), [type, m]);
  // const debouncer = _.debounce((data) => sendToServer(data), debounce ?? 3000, { maxWait: 5000 });
  // const debouncer = useMemo(
  //   () => _.debounce((data) => dispatch(ModelsAction.requestAutosave({ data, url })), debounce ?? 1000),
  //   [debounce, dispatch, url],
  // );
  // useEffect(() => {
  //   //* Check if there is more than one entry in the queue. Default entry is the model_id. Without the if it would also send an update when initializing.
  //   if (Object.values(queue).length > 1) {
  //     debouncer(queue);
  //   }
  // }, [debouncer, queue]);
  // useEffect(() => {
  //   //* When the request is finished and there is no error, the queue will be reset.
  //   if (!isRequesting && !isError) {
  //     setQueue({ id: model['id'] });
  //   }
  // }, [isRequesting, isError, model]);
  // const update = useCallback(
  //   (key: string, value: any, rules?: ((value: any) => boolean)[]) => {
  //     //* Saves the new value is the temporary model. Is necessary so that this value is displayed in the input.
  //     if (key.includes('properties')) {
  //       const newProperties = _.set({ properties: { ...model['properties'] } }, key, value);
  //       setModel(new type({ ...(model as any), ...newProperties }));
  //     } else {
  //       const newModel = _.set({ ..._.cloneDeep(model as any) }, key, value);
  //       setModel(new type(newModel));
  //     }
  //     let isValid = true;
  //     if (rules !== undefined) {
  //       const result = rules.map((rule) => rule(value));
  //       if (result.includes(false)) isValid = false;
  //     }
  //     //* Save current key: value to queue
  //     if (isValid) {
  //       const groups = key.match(/^(properties.)?(?<key>.+)$/)?.groups;
  //       if (groups && groups['key']) {
  //         const _key = groups['key'];
  //         setQueue(() => {
  //           return { ...queue, [_key]: value };
  //         });
  //       }
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [model, type],
  // );
  // return { model, update };
};
