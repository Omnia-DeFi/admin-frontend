import React from "react";
import DeleteDataFrom from "../../components/DeleteData";
import UpdateAsset from "./UpdateAsset";

const AssetTable = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 text-center">
              Title
            </th>
            <th scope="col" className="py-3 text-center">
              Content
            </th>
            <th scope="col" className="py-3 text-center">
              Type
            </th>
            <th scope="col" className="py-3 text-center">
              Date
            </th>
            <th scope="col" className="py-3 text-center">
              Email
            </th>
            <th scope="col" className="py-3 text-center">
              Issuer
            </th>
            {/* <th scope="col" className="py-3">
              Documents
            </th> */}
            <th scope="col" className="py-3 text-center">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="py-3 text-center">
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
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.sender.title}
              </td>
              <td className="py-4 px-6 text-center"><p className="w-[120px]">{item.sender.content}</p></td>
              <td className="py-4 px-6 text-center">
                <p className="font-bold">{item.sender.type}</p>
              </td>
              <td className="py-4 px-6 text-center"><p className="w-[100px]">{item.sender.date}</p></td>
              <td className="py-4 px-6 text-center">{item.user.email}</td>
              <td className="py-4 px-6 text-center">{(item.user.issuer).slice(0, 12)} 
                {item.user.issuer.length > 17 && (
                <>
                  ....
                  {(item.user.issuer).slice(item.user.issuer.length - 5)}
                </>
                )
                }</td>
              {/* <td className="py-4 px-6">{item.documents}</td> */}
              <td className="py-4 px-6 text-left">
                <UpdateAsset collection={"asset"} data={item} />
              </td>
              <td className="py-4 px-6 text-left">
                <DeleteDataFrom collection={"asset"} data={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
