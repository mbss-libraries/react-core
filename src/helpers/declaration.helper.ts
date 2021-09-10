import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IGlobalQueryOptions {
  extended?: boolean;
}

// ----- Snackbar - Options -------
type TSnackbarTypes = 'danger';
export interface ISnackbarOptions {
  error?: string;
  type?: TSnackbarTypes;
  icon?: IconProp;
}
