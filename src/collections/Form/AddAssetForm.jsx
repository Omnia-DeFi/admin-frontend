import { Form, Input, Select, Radio } from "antd";
import { FileUploader } from "./Uploader/FileUploader";
import { MultiPictureUploader } from "./Uploader/MultiPicturesUploader";
import { MultiFileUploader } from "./Uploader/MultiFileUploader";
import { useState } from "react";
const { Option } = Select;

export const AddAssetForm = ({
  editMode,
  title,
  setTitle,
  description,
  setDescription,
  floorArea,
  setFloorArea,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  otherRooms,
  setOtherRooms,
  floorPrice,
  setFloorPrice,
  hasOutdoorSpace,
  setHasOutdoorSpace,
  saleTimeframe,
  setSaleTimeframe,
  extraConditionsLabels,
  setExtraConditionsLabels,
  extraConditionsDescriptions,
  setExtraConditionsDescriptions,
  AVMUrl,
  setAVMUrl,
  surveyProofUrl,
  setSurveyProofUrl,
  landRegistryUrl,
  setLandRegistryUrl,
  imageUrls,
  setImageUrls,
  setSelectedUsers,
  users,
}) => {
  const handleSelectUserChange = (value) => {
    setSelectedUsers(value.map((selectedUser) => ({ id: selectedUser })));
  };

  return (
    <Form layout="vertical">
      <div
        className="grid md:grid-cols-2 md:gap-6"
        style={{ display: editMode ? "none" : "block" }}
      >
        <Form.Item label="Users">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select users"
            onChange={handleSelectUserChange}
          >
            {users.map((user) => (
              <Option key={user.id}>{user.email}</Option>
            ))}
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

      <div className="grid md:grid-cols-3 md:gap-3">
        <Form.Item label="Floor Area">
          <Input
            placeholder="Enter Floor Area"
            value={floorArea}
            onChange={(e) => setFloorArea(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Bedrooms">
          <Input
            placeholder="No. of BedRooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Bathrooms">
          <Input
            placeholder="No. of Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-3 md:gap-3">
        <Form.Item label="Other Rooms">
          <Input
            placeholder="No. of Other Rooms"
            value={otherRooms}
            onChange={(e) => setOtherRooms(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Floor Price">
          <Input
            placeholder="Enter Floor Price"
            value={floorPrice}
            onChange={(e) => setFloorPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Sale Time Frame">
          <Input
            placeholder="Enter Sale Time Frame"
            value={saleTimeframe}
            onChange={(e) => setSaleTimeframe(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Extra Conditions Labels">
          <Input
            placeholder="Add Extra Conditions Labels"
            value={extraConditionsLabels}
            onChange={(e) => setExtraConditionsLabels(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Extra Conditions Descriptions">
          <Input
            placeholder="Enter Extra Conditions Descriptions"
            value={extraConditionsDescriptions}
            onChange={(e) => setExtraConditionsDescriptions(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-1 md:gap-6">
        <label>Has Outdoor Space</label>
        <Radio.Group
          onChange={(e) => {
            setHasOutdoorSpace(e.target.value);
          }}
          value={String(hasOutdoorSpace)}
        >
          <Radio value={"true"}>True</Radio>
          <Radio value={"false"}>False</Radio>
        </Radio.Group>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="AVM">
          <FileUploader label="AVM" Url={AVMUrl} setUrl={setAVMUrl} editMode={editMode} />
        </Form.Item>

        <Form.Item label="Survey Proof">
          <FileUploader label="SurveyProof" Url={surveyProofUrl} setUrl={setSurveyProofUrl} editMode={editMode} />
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="LandRegistry">
          <FileUploader label="LandRegistry" Url={landRegistryUrl} setUrl={setLandRegistryUrl} editMode={editMode} />
        </Form.Item>

        <Form.Item label="Pictures">
          <MultiPictureUploader Urls={imageUrls} setUrls={setImageUrls} editMode={editMode}/>
        </Form.Item>
      </div>
    </Form>
  );
};
