import { prisma } from "~/prisma";
import Head from "next/head";
import {Navbar, Heading} from "~/components";
import { AddUsers } from "src/collections";
import { useState } from 'react'

const Users = ({collectionName, data}) => {
  const [users, setUsers] = useState(data);
  return (
    <>
      <Head>
        <title>Backoffice - Users</title>
      </Head>
      <Navbar currentPage="user" />
      <div className="container mx-auto p-8 text-center">
      <Heading level={3}>Users</Heading>
      <AddUsers setUsers={setUsers}/>
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
