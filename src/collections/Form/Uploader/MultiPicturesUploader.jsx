/* eslint-disable @next/next/no-img-element */
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
// import type { UploadFile } from 'antd/es/upload/interface';

export const MultiPictureUploader = ({ Urls, setUrls, editMode }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const addImages = (options) => {
    const { file } = options;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log("READER", reader.result);
      uploadImage(options, reader.result);
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const uploadImage = async (options, base64EncodedImage) => {
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
    <>
      <Upload
        multiple
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        customRequest={addImages}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="image"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
