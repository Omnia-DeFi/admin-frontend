import React from "react";
import DeviceTable from "./DeviceTable";
import AddDevice from "./AddDevice";

const Device = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">Device</h1>
      <div className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
        <div></div>
        <AddDevice collection={collectionName} data={data} />
      </div>
      {data.length > 0 && (
        <div className="w-auto min-w-[40%] max-w-min mt-12 mx-auto space-y-6 flex flex-col items-stretch">
          <DeviceTable data={data} />
        </div>
      )}
    </>
  );
};

export default Device;
