import _ from 'lodash';

// export const buildEndpoint = <T extends string>(path: string, query?: IGlobalQueryOptions<T>): string => {
//   let url = path;
//   if (query?.extended) url = `${url}?extended=true`;
//   if (query?.extendedExclude && query.extendedExclude.length > 0) {
//     _.forEach(query.extendedExclude, (i) => {
//       url = `${url}&extendedExclude[]=${i}`;
//     });
//   }

//   return url;
// };

/**
 * T => TModelNames
 */
export interface IGlobalQueryOptions<T extends string> {
  extended?: boolean | T[];
  all?: boolean;
  withDeleted?: boolean;
  ignorePermissions?: boolean;
}
