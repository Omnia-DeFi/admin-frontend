import { AddAssets } from ".";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { DeleteData } from "..";

export const Assets = ({ assets, setAssets, collection }) => {
  const [asset, setAsset] = useState();
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const columns = [
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },
    // {
    //   title: "Issuer",
    //   dataIndex: "issuer",
    //   key: "issuer",
    // },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "AVM",
      dataIndex: "AVM",
      key: "AVM",
    },
    {
      title: "surveyProof",
      dataIndex: "surveyProof",
      key: "surveyProof",
    },
    {
      title: "otherDocuments",
      dataIndex: "otherDocuments",
      key: "otherDocuments",
    },
    {
      title: "videos",
      dataIndex: "videos",
      key: "videos",
    },
    {
      title: "pictures",
      dataIndex: "pictures",
      key: "pictures",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setUser(record);
              setEditMode(true)
              setShowModal(true);
            }}
          >
            Edit
          </Button>
          <DeleteData users={assets} setUsers={setAssets} collection={collection} data={record} />
        </Space>
      ),
    },
  ];

  const dataSource = assets;

  return (
    <>
      <AddAssets 
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
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};
