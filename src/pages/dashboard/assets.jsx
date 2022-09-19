import { prisma } from "~/prisma";
import Head from "next/head";
import { Navbar, Heading } from "~/components";
import { Users } from "~/collections";
import { useState } from "react";
import { Assets } from "src/collections/Assets";

const AssetsPage = ({ collectionName, data, users }) => {
  const [assets, setAssets] = useState(data);
  return (
    <>
      <Head>
        <title>Backoffice - Assets</title>
      </Head>
      <Navbar currentPage="asset" />
      <div className="container mx-auto p-8 text-center">
        <Heading level={3}>Assets</Heading>
        <Assets
          users={users}
          assets={assets}
          setAssets={setAssets}
          collection={collectionName}
        />
      </div>
    </>
  );
};

export default AssetsPage;

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
      pictures: true,
    },
  });

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
    },
  });

  return {
    props: {
      data,
      users,
      collectionName: "asset",
    },
  };
};
