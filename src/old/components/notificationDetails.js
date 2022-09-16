import { Button } from "antd";
import Link from "next/link";
import React from "react";

const notificationDetails = ({ id }) => {
  return (
    <Link href={`/notification/${id}`} passHref>
      <Button>Details</Button>
    </Link>
  );
};

export default notificationDetails;
