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
      folder_hash: true,
      root_files: true,
      subfolder_files: true,
      user: {
        select:{
          issuer: true,
          email: true,
        }
      },
      read: true,
      // reciever: {
      //   select: {
      //     title: true,
      //     content: true,
      //     type: true,
      //     read: true,
      //   },
      // },
    },
  });

  const formatData = data.map(d => {
    d.date = d.date.toDateString();
    return d;
  })
  
  return {
    props: {
      data: formatData,
      collectionName: "assets",
    },
  };
};
