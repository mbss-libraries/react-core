// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { User } from 'src/models';
// import { IAction } from 'src/utilities';
// import _, { isObject } from 'lodash';
// import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
// import AuthenticationAction from 'src/store/authentication/AuthenticationAction';
// import ModelsAction from 'src/store/models/ModelsAction';
// import { IStore } from 'src/store/reducer';
// import { EModels, TModelNames, TModels } from 'src/store/models/ModelsReducer';

// const modelsMiddleware =
//   (): Middleware =>
//   (store: MiddlewareAPI<Dispatch, IStore>) =>
//   (next: Dispatch) =>
//   (action: IAction<any>): void => {
//     if (isObject(action.payload) && action.meta?.ignoreModelMiddleware !== true) {
//       if (Object.keys(action.payload).includes('delete') && action.payload['delete'] !== undefined) {
//         const models: { [key in TModelNames]?: string[] } = action.payload['delete'];
//         // next(ModelsAction.deleteModels(models));
//       }
//       const foundModels = _.intersection(Object.keys(action.payload), Object.values(EModels)) as EModels[];
//       const state = store.getState();
//       if (foundModels.length > 0) {
//         const models: { [key in TModelNames]?: TModels[] } = {};
//         foundModels.forEach((name) => {
//           if (name === EModels.User) {
//             const user = _.find(action.payload[name] as User[], (user) => user.id === state.authentication.authUser?.id);
//             if (user && user.updatedAt !== state.authentication.authUser?.updatedAt) {
//               next(AuthenticationAction.updateAuthUserManual(user));
//             }
//           }
//           models[name] = action.payload[name];
//         });
//         // next(ModelsAction.storeModels(models, _.get(action.payload, 'override', [])));
//       }
//     }

//     next(action);
//   };

// export default modelsMiddleware;
export default '';
