import { prisma } from "../../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";
import User from "../collections/User/User";

const Dashboard = ({ data, collectionName }) => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar currentPage="user" />
      <div className="my-10">
        <User collectionName={collectionName} data={data} />
      </div>
    </>
  );
};

export default Dashboard;

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
