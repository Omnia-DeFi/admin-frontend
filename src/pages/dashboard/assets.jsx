import { prisma } from "~/prisma";
import Head from "next/head";
import { Navbar, Heading } from "~/components";
import { Users } from "~/collections";
import { useState } from "react";
import { Assets } from "src/collections/Assets";
import axios from "axios";
import absoluteUrl from 'next-absolute-url'

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

export const getServerSideProps = async ({req}) => {
  const { origin } = absoluteUrl(req);
  const { data } = await axios.get(
    `${origin}/api/asset/get/getAsset`
  );

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
