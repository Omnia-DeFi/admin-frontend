import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const OwnerModal = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(data?.userId);
  }, [data]);

  async function OwnerModalForm() {
    try {
      // console.log("---", userId);
      const response = await fetch(`/api/kyb/getCompanyDetails/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log("data==", data);
      return data;
    } catch (error) {
      console.error(`Could not get owner details: ${error}`);
    }
  }

  // const promise = OwnerModalForm();
  // promise.then((result) => {
  // if (result.length){
  //   console.log("result", result[0].supportiveData.name)
  // }

  // });
  // setName(data[0])

  // console.log("Started request…");

  return (
    <>
      <a
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {data.userId}
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
              <p>21357868</p>
            </div>
            <div>
              <p className="mb-0">Company Legal Name</p>
              <p>name</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <p className="mb-0">Incorporation Data</p>
              <p>31/09/2022</p>
            </div>
            <div>
              <p className="mb-0">Jurisdiction</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <hr></hr>
          <p>Identified Users</p>
        </Modal>
      )}
    </>
  );
};
