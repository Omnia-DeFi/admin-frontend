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
      <Navbar currentPage="asset" />
      <div className="my-10">
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
      owners: {
        select: {
          issuer: true,
          email: true,
        },
      },
      title: true,
      description: true,
      AVM: true,
      surveyProof: true,
      otherDocuments: true,
      videos: true,
      pictures:true,
    },
  });

  return {
    props: {
      data,
      collectionName: "asset",
    },
  };
};
