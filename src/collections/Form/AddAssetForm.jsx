import { Form, Input, Select } from "antd";
import { FileUploader } from "./Uploader/FileUploader";
import { MultiPictureUploader } from "./Uploader/MultiPicturesUploader";
import {
  MultiFileUploader,
} from "./Uploader/MultiFileUploader";
import { useState } from "react";
const { Option } = Select; 

export const AddAssetForm = ({
  title,
  setTitle,
  description,
  setDescription,
  setAVMUrl,
  setSurveyProofUrl,
  setOtherDocumentsUrls,
  setVideoUrls,
  setPictureUrls,
  setSelectedUsers,
  users,
}) => {
  const handleSelectUserChange = (value) => {
    setSelectedUsers(value.map(selectedUser => ({id: selectedUser})),
    )
  }
  return (
    <Form layout="vertical">
      <div className="grid md:grid-cols-2 md:gap-6">
      <Form.Item label="Users">
        <Select mode="multiple" allowClear placeholder="Select users" onChange={handleSelectUserChange}>
          {users.map(user => (<Option key={user.id}>{user.email}</Option>))}
        </Select>
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Title">
          <Input
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="AVM">
          <FileUploader label="AVM" setUrl={setAVMUrl} />
        </Form.Item>

        <Form.Item label="Survey Proof">
          <FileUploader setUrl={setSurveyProofUrl} />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Videos">
          <MultiFileUploader label="videos" setUrls={setVideoUrls} />
        </Form.Item>

        <Form.Item label="Other Documents">
          <MultiFileUploader label="" setUrls={setOtherDocumentsUrls} />
        </Form.Item>
      </div>
      <Form.Item label="Pictures">
        <MultiPictureUploader setUrls={setPictureUrls} />
      </Form.Item>
    </Form>
  );
};
