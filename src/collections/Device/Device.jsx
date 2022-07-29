import React from "react";
import DeviceTable from "./DeviceTable";
import AddDevice from "../../components/AddDevice";

const Device = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">Device</h1>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <AddDevice collection={collectionName} data={data} />
      </div>
      <div className="w-auto min-w-[33%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <DeviceTable data={data} />
      </div>
    </>
  );
};

export default Device;
