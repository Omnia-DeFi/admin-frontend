import { AddAssets } from ".";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { DeleteData } from "..";
import { OwnerModal } from "..";

export const Assets = ({ assets, setAssets, collection, users }) => {
  const [asset, setAsset] = useState();
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "User Id",
      key: "userId",
      render: (_, record) => <OwnerModal data={record}></OwnerModal>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      // sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Land Registery",
      dataIndex: "landRegistry",
      key: "landRegistry",
      render: (_, record) => (
        <a
          href={record?.landRegistry}
          target="_blank"
          rel="noopener noreferrer"
        >
          LandRegistry Image
        </a>
      ),
    },
    {
      title: "Floor Area",
      dataIndex: "floorArea",
      key: "floorArea",
    },
    {
      title: "Has Outdoor Space",
      key: "hasOutdoorSpace",
      render: (_, record) => String(record.hasOutdoorSpace),
    },
    {
      title: "Bedrooms",
      dataIndex: "bedrooms",
      key: "bedrooms",
    },
    {
      title: "Bathrooms",
      dataIndex: "bathrooms",
      key: "bathrooms",
    },
    {
      title: "Other Rooms",
      dataIndex: "otherRooms",
      key: "otherRooms",
    },
    {
      title: "Sale Time Frame",
      dataIndex: "saleTimeframe",
      key: "saleTimeframe",
    },
    {
      title: "Extra Conditions Labels",
      dataIndex: "extraConditionsLabels",
      key: "extraConditionsLabels",
    },
    {
      title: "Extra Conditions Descriptions",
      dataIndex: "extraConditionsDescriptions",
      key: "extraConditionsDescriptions",
    },
    {
      title: "AVM",
      // dataIndex: "AVM",
      key: "AVM",
      render: (_, record) => (
        <a href={record?.AVM} target="_blank" rel="noopener noreferrer">
          AVM
        </a>
      ),
    },
    {
      title: "Survey Proof",
      dataIndex: "surveyProof",
      key: "surveyProof",
      render: (_, record) => (
        <a href={record?.surveyProof} target="_blank" rel="noopener noreferrer">
          Survey Proof
        </a>
      ),
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (_, record) =>
        record.images.map((imageUrls, index) => (
          <div key={index}>
            <a href={imageUrls} target="_blank" rel="noopener noreferrer">
              Image {index + 1}{" "}
            </a>
          </div>
        )),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setAsset(record);
              setEditMode(true);
              setShowModal(true);
            }}
          >
            Edit
          </Button>
          <DeleteData
            users={assets}
            setUsers={setAssets}
            collection={collection}
            data={record}
          />
        </Space>
      ),
    },
  ];

  const dataSource = assets;

  return (
    <>
      <AddAssets
        users={users}
        assets={assets}
        editMode={editMode}
        setEditMode={setEditMode}
        asset={asset}
        setAsset={setAsset}
        showModal={showModal}
        setShowModal={setShowModal}
        setAssets={setAssets}
        collection={collection}
      />
      <div className="mt-8">
        <Table
          scroll={{ x: true }}
          dataSource={dataSource}
          rowKey="id"
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 20,
            showSizeChanger: true,
            hideOnSinglePage: true,
          }}
        />
      </div>
    </>
  );
};
