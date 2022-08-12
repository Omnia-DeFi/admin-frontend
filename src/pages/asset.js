import { prisma } from "../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Asset from "../collections/Asset/Asset";

const AssetPage = ({ data, collectionName }) => {
  return ( 
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />
      <div className="mt-[40px]">
        <Asset collectionName={collectionName} data={data} />
      </div>
    </>
  );
};

export default AssetPage;

export const getServerSideProps = async () => {
  const data = await prisma.asset.findMany({
    select: {
      id: true,
      user: {
        select:{
          issuer: true,
          email: true,
        }
      },
      sender: {
        select: {
          title: true,
          content: true,
          type: true,
        }
      }
    },
  });

  return {
    props: {
      data,
      collectionName: "assets",
    },
  };
};
