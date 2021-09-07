import { Button, Popconfirm } from 'antd';
import React, { Fragment } from 'react';

interface IProps {
  onConfirm(): void;
  button?: React.ReactElement;
  text?: string | React.ReactElement;
  isLoading?: boolean;
}
export const ConfirmDeleteButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const defaultButtonJSX = <Button size="small" type="text" danger icon={<i className="fas fa-trash" />}></Button>;
  return (
    <Fragment>
      <Popconfirm
        overlayClassName="center-buttons"
        title={props.text ?? <strong className="text-center w-100">Are you sure you want to delete it?</strong>}
        icon={<i className="fas fa-2x fa-exclamation-triangle text-warning text-center w-100 mb-2" />}
        okType="danger"
        okText="Delete it"
        okButtonProps={{ loading: props.isLoading }}
        onConfirm={props.onConfirm}
      >
        {props.button ?? defaultButtonJSX}
      </Popconfirm>
    </Fragment>
  );
};
