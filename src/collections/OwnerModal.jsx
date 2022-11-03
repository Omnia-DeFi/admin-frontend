import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

export const OwnerModal = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <p>Company Registration Number</p>
            <p>Company Legal Name</p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <p>Incorporation Data</p>
            <p>Jurisdiction</p>
          </div>
          <hr></hr>
          <p>Identified Users</p>
        </Modal>
      )}
    </>
  );
};
