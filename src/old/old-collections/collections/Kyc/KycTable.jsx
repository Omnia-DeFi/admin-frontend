import React from "react";
import DeleteDataFrom from "src/old/old-components/components/DeleteData";
import UpdateKyc from "./UpdateKyc";

const KycTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 text-center">
              Issuer
            </th>
            <th scope="col" className="py-3 text-center">
              Email
            </th>
            <th scope="col" className="py-3 text-center">
              Notification
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-50 ">
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                {item.user.issuer.slice(0, 12)}
                {item.user.issuer.length > 17 && (
                  <>
                    ....
                    {item.user.issuer.slice(item.user.issuer.length - 5)}
                  </>
                )}
              </td>
              <td className="py-4 px-6 text-center">{item.user.email}</td>
              <td className="py-4 px-6 text-left">
                <div className="w-[250px]">
                  <p className="font-bold">{item.triggerer.title}</p>
                  <p>{item.triggerer.content}</p>
                  <p>
                    <span className="text-sm font-bold">Type: </span>
                    {item.triggerer.type}
                  </p>
                </div>
              </td>
              <td className="py-4 px-6 text-left">
                <UpdateKyc collection={"kyc"} data={item} />
              </td>
              <td className="py-4 px-6 text-left">
                <DeleteDataFrom collection={"kyc"} data={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KycTable;
