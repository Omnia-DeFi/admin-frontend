import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import NotifyUser from "../../components/NotifyUser";
import UpdateData from "./UpdateData";

const UserTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg"
    >

      <table className="text-sm text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="w-[100px]">
            <th scope="col" className="py-4 text-center">
              Issuer
            </th>
            <th scope="col" className="py-3 text-center">
              Email
            </th>
            <th scope="col" className="py-3 text-center">
              Phone Number
            </th>
            <th scope="col" className="py-3 text-center">
              Public Address
            </th>
            <th scope="col" className="py-3">
              <span className="sr-only">Edit</span>
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
            <tr
              key={item.id}
              className="bg-white border-b  hover:bg-gray-50"
            >
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                {(item.issuer).slice(0, 12)} 
                {item.issuer.length > 17 && (
                <>
                  ....
                  {(item.issuer).slice(item.issuer.length - 5)}
                </>
                )
                }
              </td>
              <td className="py-4 px-6 text-center">{item.email}</td>
              <td className="py-4 px-6 text-center">{item.phone_number}</td>
              <td className="py-4 px-6 text-center">{(item.public_address)?.slice(0, 12)}....{(item.public_address)?.slice(item.public_address.length - 5)}</td>
              <td className="py-4 px-2 text-left">
                <UpdateData collection={"user"} data={item} />
              </td>
              <td className="py-4 px-2 text-right">
                <DeleteDataFrom collection={"user"} data={item} />
              </td>
              <td className="py-4 px-2 text-left">
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
