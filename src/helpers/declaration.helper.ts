import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type TValueOf<T> = T[keyof T];

// ----- Snackbar - Options -------
type TSnackbarTypes = 'danger';
export interface ISnackbarOptions {
  type?: TSnackbarTypes;
  icon?: IconProp;
}

export interface IGlobalSelectorOptions {
  withNavigation?: boolean;
}
