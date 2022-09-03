import React from "react";
import AlertTable from "./AlertTable";
import AddAlert from "./AddAlert";

const Alert = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">Alert</h1>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <div></div>
        <AddAlert collection={collectionName} data={data} />
      </div>
      {data.length > 0 && (
        <div className="w-auto min-w-[40%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <AlertTable data={data} />
        </div>
      )}
    </>
  );
};

export default Alert;
