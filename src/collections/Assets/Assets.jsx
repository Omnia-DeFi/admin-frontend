import { AddAssets } from ".";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { DeleteData } from "..";
import Link from "next/link";

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
      // dataIndex: "AVM",
      key: "AVM",
      render: (_, record) => (
        <Link href={record.AVM}>
          <a target="_blank" rel="noopener noreferrer">AVM</a>
        </Link>
      )
    },
    {
      title: "surveyProof",
      dataIndex: "surveyProof",
      key: "surveyProof",
      render: (_, record) => (
        <Link href={record.surveyProof}>
          <a target="_blank" rel="noopener noreferrer">Survey Proof</a>
        </Link>
      )
    },
    {
      title: "otherDocuments",
      dataIndex: "otherDocuments",
      key: "otherDocuments",
      render: (_, record) => (
        record.otherDocuments.map((otherDocument, index) => (
          <div key={index}>
          <Link href={otherDocument}>
            <a target="_blank" rel="noopener noreferrer">Open Document {index+1} </a>
          </Link>
          </div>
        ))
      )
    },
    {
      title: "videos",
      dataIndex: "videos",
      key: "videos",
      render: (_, record) => (
        record.videos.map((videoUrl, index) => (
          <div key={index}>
          <Link href={videoUrl}>
            <a target="_blank" rel="noopener noreferrer">Video {index+1} </a>
          </Link>
          </div>
        ))
      )
    },
    {
      title: "pictures",
      dataIndex: "pictures",
      key: "pictures",
      render: (_, record) => (
        record.pictures.map((pictureUrl, index) => (
          <div key={index}>
          <Link href={pictureUrl}>
            <a target="_blank" rel="noopener noreferrer">Picture {index+1} </a>
          </Link>
          </div>
        ))
      )
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
