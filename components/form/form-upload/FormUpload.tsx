import { FormItemContainer, IFormItemContainerProps } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { message, Upload } from 'antd';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import ModelsAction from 'src/store/models/ModelsAction';

interface IProps extends IFormItemContainerProps {
  path: string;
  multiple?: boolean;
  className?: string;
}
export const FormUpload: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { multiple, path } = props;
  const dispatch = useDispatch();

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress, action } = options;

    const fmData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        onProgress({ percent });
      },
    };
    fmData.append('file', file);
    try {
      const res = await axios.post(action, fmData, config);
      dispatch(ModelsAction.storeModels(res.data));
      onSuccess('Ok');
    } catch (err) {
      onError({ err });
    }
  };
  return (
    <FormItemContainer {...props}>
      <Upload.Dragger
        multiple={multiple}
        action={path}
        customRequest={uploadImage}
        maxCount={1}
        onChange={(info) => {
          const { status } = info.file;
          // if (status !== 'uploading') {
          // }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        }}
        className="rounded"
      >
        <p className="ant-upload-drag-icon mt-2">
          <FontAwesomeIcon icon="upload" size="3x" className="text-muted" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload.</p>
      </Upload.Dragger>
    </FormItemContainer>
  );
};
