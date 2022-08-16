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
      <Navbar currentPae="device" />
      <div className="my-10">
        <Device collectionName={collectionName} data={data} />
      </div>
    </>
  );
};

export default DevicePage;

export const getServerSideProps = async () => {
  const data = await prisma.device.findMany({
    select: {
      id: true,
      token: true,
      user: {
        select: {
          email: true,
          issuer: true,
        },
      },
      reciever: {
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
