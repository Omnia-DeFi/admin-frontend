import { prisma } from "../../../prisma/prisma";
import Head from "next/head";
import React from "react";
import { Navbar } from "~/components";

function test({ notifications }) {
  return (
    <div>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />
      <div className="bg-gray-200">
        <div className="flex justify-around bg-yellow-200 p-2">
          <div className="flex-1 font-semibold">Bearer</div>
          <div className="flex-1 font-semibold">Type</div>
          <div className="flex-1 font-semibold">Title</div>
          <div className="flex-1 font-semibold">Content</div>
          <div className="flex-1 font-semibold">Read</div>
        </div>

        {notifications.map((ntc) => (
          <div
            key={ntc.id}
            className="flex justify-around bg-gray-100 p-2 text-sm "
          >
            <div className="flex-1">{ntc.bearerId}</div>
            <div className="flex-1">{ntc.type}</div>
            <div className="flex-1">{ntc.title}</div>
            <div className="flex-1">{ntc.content}</div>
            <div className="flex-1">{ntc.read.toString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params: { userId } }) => {
  try {
    let data = await prisma.notificationsBearer.findUnique({
      where: {
        bearerId: userId,
      },
      select: {
        notifications: {
          select: {
            id: true,
            bearerId: true,
            type: true,
            title: true,
            content: true,
            read: true,
          },
        },
      },
    });

    if (data == null || data == {}) notifications = [];
    const notifications = data.notifications;

    return {
      props: {
        notifications,
      },
    };
  } catch (error) {
    return {
      props: {
        notifications: [],
      },
    };
  }
};

export default test;
