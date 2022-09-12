import {Button, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';

export const FileUploader = ({label}) => {
  const props = {
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
  };
  return (
    <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload {label}</Button>
        </Upload>
  );
};
