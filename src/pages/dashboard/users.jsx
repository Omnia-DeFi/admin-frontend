import { prisma } from "~/prisma";
import Head from "next/head";
import {Navbar, Heading} from "~/components";
import { AddUsers } from "~/collections";
import { shortenString } from "~/utils";
import { useState } from 'react'
import { Table } from "antd";

const Users = ({collectionName, data}) => {
  const [users, setUsers] = useState(data);
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
    }
  ]

  const dataSource = users.map(user => ({...user, issuer: shortenString(user.issuer), public_address: shortenString(user.public_address)}));

  return (
    <>
      <Head>
        <title>Backoffice - Users</title>
      </Head>
      <Navbar currentPage="user" />
      <div className="container mx-auto p-8 text-center">
      <Heading level={3}>Users</Heading>
      <AddUsers setUsers={setUsers} collection={collectionName}/>
      <div className="mt-8">
        <Table dataSource={dataSource} columns={columns}/>
      </div>
      </div>
    </>
  )
}

export default Users

export const getServerSideProps = async () => {
  const data = await prisma.user.findMany({
    select: {
      issuer: true,
      id: true,
      email: true,
      phone_number: true,
      public_address: true,
    },
  });

  return {
    props: {
      data,
      collectionName: "user",
    },
  };
};
