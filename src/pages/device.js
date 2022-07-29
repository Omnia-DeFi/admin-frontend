import { prisma } from "../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Device from "../collections/Device/Device";

const DevicePage = ({ data, collectionName }) => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />

      <Device collectionName={collectionName} data={data} />
    </>
  );
};

export default DevicePage;

export const getServerSideProps = async () => {
  const data = await prisma.kyc.findMany({
    select: {
      id: true,
      user: {
        select: {
          email: true,
          issuer: true,
        },
      },
      triggerer: {
        select: {
          title: true,
          content: true,
          type: true,
          read: true,
        },
      },
    },
  });

  return {
    props: {
      data,
      collectionName: "device",
    },
  };
};
