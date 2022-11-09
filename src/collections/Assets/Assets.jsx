import { AddAssets } from ".";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { DeleteData } from "..";
import Link from "next/link";

export const Assets = ({ assets, setAssets, collection, users }) => {
  const [asset, setAsset] = useState();
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
      // record.userId?.map((user) => <p key={user.id}>{user.email}</p>),
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
        <Link href={record.landRegistry}>
          <a target="_blank" rel="noopener noreferrer">
            LandRegistry Image
          </a>
        </Link>
      ),
    },
    {
      title: "Floor Area",
      dataIndex: "floorArea",
      key: "floorArea",
    },
    {
      title: "Has Outdoor Space",
      dataIndex: "hasOutdoorSpace",
      key: "hasOutdoorSpace",
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
        <Link href={record?.AVM}>
          <a target="_blank" rel="noopener noreferrer">
            AVM
          </a>
        </Link>
      ),
    },
    {
      title: "Survey Proof",
      dataIndex: "surveyProof",
      key: "surveyProof",
      render: (_, record) => (
        <Link href={record.surveyProof}>
          <a target="_blank" rel="noopener noreferrer">
            Survey Proof
          </a>
        </Link>
      ),
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (_, record) =>
        record.images.map((imageUrls, index) => (
          <div key={index}>
            <Link href={imageUrls}>
              <a target="_blank" rel="noopener noreferrer">
                Image {index + 1}{" "}
              </a>
            </Link>
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
          columns={columns}
          rowKey="id"
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
