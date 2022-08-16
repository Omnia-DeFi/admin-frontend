import React from "react";
import AddData from "./AddData";
import UserTable from "./UserTable";

const User = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-4">User</h1>
      <div className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
        <div></div>
        <AddData collection={collectionName} data={data} />
      </div>
      {data.length > 0 && (
        <div className="w-auto min-w-[36%] max-w-min mt-12 mx-auto space-y-6 flex flex-col items-stretch">
          <UserTable data={data} />
        </div>
      )}
    </>
  );
};

export default User;
