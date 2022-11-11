import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
const jurisdictions = require("../utils/jurisdiction.json");

export const OwnerModal = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ownerDetails, setOwnerDetails] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(data?.userId);
  }, [data]);

  useEffect(() => {}, [ownerDetails]);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/kyb/getCompanyDetails/${userId}`
      );
      if (!response.ok) {
        console.log(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.supportiveData) {
        data = { ...data, ...data.supportiveData };
        delete data.supportiveData;

        if (data.jurisdiction) {
          const jurisdiction = jurisdictions.filter(
            (item) => item.id == data.jurisdiction
          );
          data.jurisdiction =
            jurisdiction.length && jurisdiction[0].jurisdiction
              ? jurisdiction[0].jurisdiction
              : "-";
        } else {
          data.jurisdiction = "-";
        }
        setOwnerDetails(data);
      }
    } catch (error) {
      console.error(`Could not get owner details: ${error}`);
    }
  };

  return (
    <>
      <a
        onClick={async () => {
          await getData();
          setIsModalVisible(true);
        }}
      >
        {data.companyName}
      </a>
      {isModalVisible && (
        <Modal
          title="Owner Details"
          open={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <p className="mb-0">Company Registration Number</p>
              <p>
                {ownerDetails && ownerDetails.registrationNumber
                  ? ownerDetails.registrationNumber
                  : "-"}
              </p>
            </div>
            <div>
              <p className="mb-0">Company Legal Name</p>
              <p>
                {ownerDetails && ownerDetails.name ? ownerDetails.name : "-"}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <p className="mb-0">Incorporation Data</p>
              <p>
                {ownerDetails && ownerDetails.incorporationDate
                  ? ownerDetails.incorporationDate
                  : "-"}
              </p>
            </div>
            <div>
              <p className="mb-0">Jurisdiction</p>
              <p>
                {ownerDetails && ownerDetails.jurisdiction
                  ? ownerDetails.jurisdiction
                  : "-"}
              </p>
            </div>
          </div>
          <hr></hr>
          <p>Identified Users</p>
          <ul className="identifies-users">
            {ownerDetails &&
            ownerDetails.identifiedUsers &&
            ownerDetails.identifiedUsers.length ? (
              ownerDetails.identifiedUsers.map((item, index) => (
                <li key={item.id} title={`${item.issuer}      ${item.email}`}>
                  {`User${index + 1}`}
                </li>
              ))
            ) : (
              <li>No Identified Users available</li>
            )}
          </ul>
        </Modal>
      )}
    </>
  );
};
