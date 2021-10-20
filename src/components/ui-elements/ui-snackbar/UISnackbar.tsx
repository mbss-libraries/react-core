import React from 'react';
import './UISnackbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UIAlert } from '../ui-alert/UIAlert';
import { Snackbar, SnackbarProps } from '@mui/material';

export interface UISnackbarProps extends SnackbarProps {
  className?: string;
  style?: React.CSSProperties;
}

export const UISnackbar: React.FC<UISnackbarProps> = (props: React.PropsWithChildren<UISnackbarProps>) => {
  return <Snackbar {...props} />;
};
