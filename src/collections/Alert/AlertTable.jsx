import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import UpdateAlert from "../../components/UpdateAlert";

const AlertTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3">
              Title
            </th>
            <th scope="col" className="py-3">
              Content
            </th>
            <th scope="col" className="py-3">
              Type
            </th>
            <th scope="col" className="py-3">
              Date
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <div key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </td>
                <td className="py-4 px-6">{item.content}</td>
                <td className="py-4 px-6">
                  <p className="font-bold">{item.type}</p>
                </td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6 text-right">
                  <UpdateAlert collection={"alert"} data={item} />
                </td>
                <td className="py-4 px-6 text-right">
                  <DeleteDataFrom collection={"alert"} data={item} />
                </td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
