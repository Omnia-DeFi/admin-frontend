import { AddUsers } from ".";
import { shortenString } from "~/utils";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { DeleteData } from "..";
import NotifyUser from "src/old/components/NotifyUser";
import NotificationDetails from "src/old/components/notificationDetails";

export const Users = ({ users, setUsers, collection }) => {
  const [user, setUser] = useState();
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Issuer",
      dataIndex: "issuer",
      key: "issuer",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phoneNumber",
    },
    {
      title: "Public Address",
      dataIndex: "public_address",
      key: "publicAddress",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setUser(record);
              setEditMode(true);
              setShowModal(true);
            }}
          >
            Edit
          </Button>
          <DeleteData
            users={users}
            setUsers={setUsers}
            collection={collection}
            data={record}
          />
          <NotifyUser userId={record.id} />

          <NotificationDetails id={record.id} />
        </Space>
      ),
    },
  ];

  const dataSource =
    users?.length > 0 &&
    users.map((user) => ({
      ...user,
      key: user.id,
      issuer: shortenString(user.issuer),
      public_address: shortenString(user.public_address),
    }));

  return (
    <>
      <AddUsers
        users={users}
        editMode={editMode}
        setEditMode={setEditMode}
        user={user}
        setUser={setUser}
        showModal={showModal}
        setShowModal={setShowModal}
        setUsers={setUsers}
        collection={collection}
      />
      <div className="mt-8">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};
