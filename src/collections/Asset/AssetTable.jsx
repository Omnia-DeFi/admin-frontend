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
              Description
            </th>
            <th scope="col" className="py-3 text-center">
              AVM
            </th>
            <th scope="col" className="py-3 text-center">
              surveyProof
            </th>
            <th scope="col" className="py-3 text-center">
              otherDocuments
            </th>
            <th scope="col" className="py-3 text-center">
              videos
            </th>
            <th scope="col" className="py-3 text-center">
              pictures
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
            <tr key={item.id} className="bg-white border-b  hover:bg-gray-50">
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.title}
              </td>
              <td className="py-4 px-6 text-center">
                <p>
                  {item.description}</p>
              </td>
              <td className="py-4 px-6 text-center">
                <p className="w-[100px]">
                <a target="_blank" href={item.AVM} rel="noreferrer">Click to Open</a></p>
              </td>
              <td className="py-4 px-6 text-center">
                <p className="w-[100px]">
                <a target="_blank" href={item.surveyProof} rel="noreferrer">Click to Open</a></p>
              </td>
              <td className="py-4 px-6 text-center">
                
                {item.otherDocuments.map((docu, i) => (
                  <p className="w-[100px]" key={i}>
                    <a target="_blank" href={docu} rel="noreferrer">Document {i+1}</a>
                  </p>
                ))}
                
                </td>
              <td className="py-4 px-6 text-center">
              {item.videos.map((vid, i) => (
                  <p className="w-[100px]" key={i}>
                  <a target="_blank" href={vid} rel="noreferrer">Video {i+1}</a>
                </p>
                ))}
              </td>
              <td className="py-4 px-6 text-center">
              {item.pictures.map((pic, i) => (
                  <p className="w-[100px]" key={i}>
                  <a target="_blank" href={pic} rel="noreferrer">Picture {i+1}</a>
                </p>
                ))}
              </td>
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
