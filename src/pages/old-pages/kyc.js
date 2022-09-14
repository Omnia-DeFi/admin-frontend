import { prisma } from "../../prisma/prisma";
import Head from "next/head";

import { Navbar } from "~/components";
import Kyc from "src/old/old-collections/collections/Kyc/Kyc";

const KycPage = ({ data, collectionName }) => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar currentPage="kyc" />
      <div className="my-10">
        <Kyc collectionName={collectionName} data={data} />
      </div>
    </>
  );
};

export default KycPage;

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
      collectionName: "kyc",
    },
  };
};
