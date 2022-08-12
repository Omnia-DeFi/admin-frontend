import React from "react";
import AddAsset from "../../components/AddAsset";
import AssetTable from "./AssetTable";

const Alert = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">Alert</h1>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <div></div>
        <AddAsset collection={collectionName} data={data} />
      </div>
      {data.length > 0 && (
        <div className="w-auto min-w-[40%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <AssetTable data={data} />
        </div>
      )}
    </>
  );
};

export default Alert;
