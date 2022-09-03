import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import UpdateDevice from "./UpdateDevice";

const DeviceTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="py-3 text-center">
              Issuer
            </th>
            <th scope="col" className="py-3 text-center">
              Email
            </th>
            <th scope="col" className="py-3 text-center">
              Reciever
            </th>
            <th scope="col" className="py-3 text-center">
              Token
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
              className="bg-white border-b text-center  hover:bg-gray-50 "
            >
              <td
                scope="row"
                className="py-4 text-center px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.user.issuer.slice(0, 12)}....
                {item.user.issuer.slice(item.user.issuer.length - 5)}
              </td>
              <td className="py-4 px-6 text-center">{item.user.email}</td>
              <td className="py-4 px-6 ">
                <div className="w-[250px]">
                  <p className="font-bold">{item.reciever.title}</p>
                  <p>{item.reciever.content}</p>
                  <p>
                    <span className="text-sm font-bold">Type: </span>
                    {item.reciever.type}
                  </p>
                </div>
              </td>
              <td className="py-4 px-6">{item.token}</td>
              <td className="py-4 px-6 text-right">
                <UpdateDevice collection={"device"} data={item} />
              </td>
              <td className="py-4 px-6 text-right">
                <DeleteDataFrom collection={"device"} data={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
