import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import UpdateKyc from "./UpdateKyc";

const KycTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3">
              Issuer
            </th>
            <th scope="col" className="py-3">
              Email
            </th>
            <th scope="col" className="py-3">
              Notification
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.user.issuer}
              </td>
              <td className="py-4 px-6">{item.user.email}</td>
              <td className="py-4 px-6">
                <p className="font-bold">{item.triggerer.title}</p>
                <p>{item.triggerer.content}</p>
              </td>
              <td className="py-4 px-6 text-right">
                <UpdateKyc collection={"kyc"} data={item} />
              </td>
              <td className="py-4 px-6 text-right">
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
