import { prisma } from "../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Alert from "../collections/Alert/Alert";

const AlertPage = ({ data, collectionName }) => {
  return ( 
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />
      <div className="mt-[40px]">
        <Alert collectionName={collectionName} data={data} />
      </div>
    </>
  );
};

export default AlertPage;

export const getServerSideProps = async () => {
  const data = await prisma.alert.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      type: true,
      date: true,
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
      collectionName: "alert",
    },
  };
};
