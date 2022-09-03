import Link from "next/link";
import React from "react";

const notificationDetails = ({ id }) => {
  return (
    <Link href={`/notification/${id}`} passHref>
      <div className="bg-green-400 cursor-pointer text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        Details
      </div>
    </Link>
  );
};

export default notificationDetails;
