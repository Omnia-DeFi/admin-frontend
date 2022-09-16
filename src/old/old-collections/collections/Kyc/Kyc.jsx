import React from "react";
import KycTable from "./KycTable";
import AddKyc from "./AddKyc";

const Kyc = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-4">Kyc</h1>
      <div className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
        <div></div>
        <AddKyc collection={collectionName} data={data} />
      </div>
      {data.length > 0 && (
        <div className="w-auto min-w-[33%] max-w-min mt-12 mx-auto space-y-6 flex flex-col items-stretch">
          <KycTable data={data} />
        </div>
      )}
    </>
  );
};

export default Kyc;
