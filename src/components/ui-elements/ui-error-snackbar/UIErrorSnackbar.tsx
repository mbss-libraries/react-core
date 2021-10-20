import React from 'react';
import './UIErrorSnackbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UISnackbar, UISnackbarProps } from '../ui-snackbar/UISnackbar';
import { UIAlert } from '../ui-alert/UIAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface UIErrorSnackbarProps extends UISnackbarProps {
  message: React.ReactNode;
  onCloseAlert: React.MouseEventHandler<HTMLButtonElement>;
  onClickAlert: React.MouseEventHandler<HTMLDivElement>;
}

export const UIErrorSnackbar: React.FC<UIErrorSnackbarProps> = (props: React.PropsWithChildren<UIErrorSnackbarProps>) => {
  const { message, onCloseAlert, onClickAlert, children, ...other } = props;
  return (
    <UISnackbar {...other}>
      <UIAlert
        message={<div className="text-center">{message}</div>}
        showIcon
        icon={<FontAwesomeIcon icon="exclamation-triangle" />}
        closable
        type="error"
        onClose={onCloseAlert}
        onClick={onClickAlert}
      >
        <div>{children}</div>
      </UIAlert>
    </UISnackbar>
  );
};
