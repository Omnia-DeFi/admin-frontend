import { prisma } from "../../prisma/prisma";
import Head from "next/head";
import {Navbar} from "../../components";
import { useState } from 'react'

const Users = ({collectionName, data}) => {
  const [users, setUsers] = useState(data);
  return (
    <>
      <div>Users</div>
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
