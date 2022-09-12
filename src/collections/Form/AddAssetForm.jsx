import { useEffect } from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { FormItem } from "~/components";
import { FileUploader } from "./Uploader/FileUploader";
import { MultiPictureUploader } from "./Uploader/MultiPicturesUploader";
import { MultiFileUploader, MultiPicturesUploader } from "./Uploader/MultiFileUploader";

export const AddAssetForm = ({
  email,
            setEmail,
            issuer,
            setIssuer,
            title,
            setTitle,
            description,
            setDescription,
            AVMUrl,
            setAVMUrl,
            surveyProofUrl,
            setSurveyProofUrl,
            otherDocumentsUrls,
            setOtherDocumentsUrls,
            videoUrls,
            setVideoUrls,
            pictureUrls,
            setPictureUrls
}) => {
  return (
    <Form layout="vertical">
      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Email">
          <Input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item label="Issuer">
          <Input placeholder="Enter Issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)}/>
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Title">
        <Input placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Item>

        <Form.Item label="Description">
        <Input placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="AVM">
          <FileUploader label="AVM" setUrl={setAVMUrl}/>
        </Form.Item>

        <Form.Item label="Survey Proof">
          <FileUploader setUrl={setSurveyProofUrl}/>
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Videos">
          <MultiFileUploader label="videos" setUrls={setVideoUrls}/>
        </Form.Item>

        <Form.Item label="Other Documents">
          <MultiFileUploader label="" setUrls={setOtherDocumentsUrls}/>
        </Form.Item>
      </div>
        <Form.Item label="Pictures">
          <MultiPictureUploader/>
        </Form.Item>
    </Form>
  );
};
