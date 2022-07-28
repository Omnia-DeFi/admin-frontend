import { prisma } from "../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";
import User from "../collections/User";


const Dashboard = ({ data, collectionName }) => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />

      <User collectionName={collectionName} data={data} />
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
    },
  });

  return {
    props: {
      data,
      collectionName: "user",
    },
  };
};
