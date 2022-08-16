import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import NotifyUser from "../../components/NotifyUser";
import UpdateData from "../../components/UpdateData";

const UserTable = ({ data }) => {

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-4 w-[100px]">
              Issuer
            </th>
            <th scope="col" className="py-3">
              Email
            </th>
            <th scope="col" className="py-3 px-3">
              Phone Number
            </th>
            <th scope="col" className="py-3">
              Public Address
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="py-3">
              Notify
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="py-4 w-[100px] px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.issuer}
                </td>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{item.phone_number}</td>
                <td className="py-4 px-6">{item.public_address}</td>
                <td className="py-4 px-6 text-right">
                  <UpdateData collection={"user"} data={item} />
                </td>
                <td className="py-4 px-6 text-right">
                  <DeleteDataFrom collection={"user"} data={item} />
                </td>
                <td className="py-4 px-6 text-right">
                  <NotifyUser userId={item.id} />
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
