import React from "react";
import DeleteDataFrom from "../components/DeleteData";
import UpdateData from "../components/UpdateData";
import AddData from "../components/AddData";
import KycTable from "./KycTable";

const Kyc = ({ collectionName, data }) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-4">Kyc</h1>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <AddData collection={collectionName} data={data} />
      </div>
      <div className="w-auto min-w-[33%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        {/* <ul>
          {data.map((item) => (
            <li key={item.id} className="border-b border-gray-600 p-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="font-bold">Issuer</p>
                  <p className="text-md">Email</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{item.user.issuer}</h3>
                  <p className="text-sm">{item.user.email}</p>
                </div>
                <div className="flex-1">
                  <p className="font-bold">Notification</p>
                  <p className="text-md">Title</p>
                  <p className="text-md">Content</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{item.triggerer.title}</h3>
                  <p className="text-sm">{item.triggerer.content}</p>
                </div>
                <div className="flex-2">
                  <UpdateData collection={"kyc"} data={item} />
                  <DeleteDataFrom collection={"kyc"} data={item} />
                </div>
              </div>
            </li>
          ))}
        </ul> */}
          <KycTable data={data} />
      </div>
    </>
  );
};

export default Kyc;
