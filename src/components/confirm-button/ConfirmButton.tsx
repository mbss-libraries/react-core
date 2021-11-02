import React, { Fragment } from 'react';
import "./ConfirmButton.css";
import 'bootstrap/dist/css/bootstrap.css';
import { UIButton } from '../ui-elements/ui-button/UIButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Popconfirm } from 'antd';

export interface ConfirmButtonProps {
  onConfirm(): void;
  text?: string | React.ReactElement;
  type?: 'delete'
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = (props: React.PropsWithChildren<ConfirmButtonProps>) => {
  const {text, isLoading, onConfirm, children, className, style } = props;
  const defaultButtonJSX = (() =>{
    return <UIButton size="small" color="red" icon={faTrash}></UIButton>;
  })()

  return (
    <Fragment>
      <Popconfirm
        className={className}
        style={style}
        overlayClassName="center-buttons"
        title={text ?? <strong className="text-center w-100">Are you sure you want to delete it?</strong>}
        icon={<i className="fas fa-2x fa-exclamation-triangle text-warning text-center w-100 mb-2" />}
        okType="danger"
        okText="Delete it"
        okButtonProps={{ loading: isLoading }}
        onConfirm={onConfirm}
      >
        {children ?? defaultButtonJSX}
      </Popconfirm>
    </Fragment>
  );
};
