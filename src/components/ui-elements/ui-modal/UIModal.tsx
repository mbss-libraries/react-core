import React from 'react';
import './UIModal.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'antd';
import { Dialog, DialogTitle } from '@mui/material';

export interface UIModalProps {
  isOpen: boolean;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  title?: string;
  titleClassName?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UIModal: React.FC<UIModalProps> = (props: React.PropsWithChildren<UIModalProps>) => {
  const { isOpen, onClose, title, titleClassName, children, className, style } = props;
  return (
    <Dialog onClose={onClose} open={isOpen} className={className} style={style}>
      {title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}
      <div className="px-3">{children}</div>
    </Dialog>
  );
};
