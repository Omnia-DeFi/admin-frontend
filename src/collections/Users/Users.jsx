import { AddUsers } from '.'
import { shortenString } from '~/utils'
import { Table, Space, Button } from 'antd'
import { useState } from 'react'

export const Users = ({users, setUsers, collection}) => {
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => {
            console.log(record)
            setShowModal(true)
          }}>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ]

  const dataSource = users.map(user => ({...user, issuer: shortenString(user.issuer), public_address: shortenString(user.public_address)}));

  return (
    <>
    <AddUsers showModal={showModal} setShowModal={setShowModal} setUsers={setUsers} collection={collection}/>
      <div className="mt-8">
        <Table dataSource={dataSource} columns={columns}/>
      </div>
      </>
  )
}