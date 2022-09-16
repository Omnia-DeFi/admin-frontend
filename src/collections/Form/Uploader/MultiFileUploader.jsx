import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

export const MultiFileUploader = ({ label, setUrls }) => {
  const props = {
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
    },
  };

  const addFiles = (options) => {
    const { file } = options;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log("READER", reader.result);
      uploadFile(options, reader.result);
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const uploadFile = async (options, base64EncodedImage) => {
    const { onSuccess, onError, file, onProgress } = options;

    console.log(base64EncodedImage);

    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA", data);
          setUrls((prevUrls) => [
            ...prevUrls,
            data.uploadedResponse.secure_url,
          ]);
          onSuccess("Ok");
        });
    } catch (err) {
      console.error(err);
      onError({ err });
    }
  };

  return (
    <Upload multiple {...props} customRequest={addFiles}>
      <Button icon={<UploadOutlined />}>Click to Upload {label}</Button>
    </Upload>
  );
};
