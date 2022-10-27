import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

export const DeleteData = ({ collection, data, setUsers }) => {
  const [showModal, setShowModal] = useState();
  const [loading, setLoading] = useState(false);

  async function deleteDataFrom() {
    setLoading(true);
    try {
      fetch(`/api/${collection}/delete/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setShowModal(false);
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== data.id)
          );
        });
    } catch (error) {
      console.log("delete: ", error);
    }
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Delete</Button>
      {showModal && (
        <Modal
          title="Confirm Delete"
          okText="Delete"
          open={showModal}
          confirmLoading={loading}
          onOk={deleteDataFrom}
          onCancel={() => {
            setShowModal(false);
          }}
        >
          <p className="text-left">Are you sure you want to delete?</p>
        </Modal>
      )}
    </>
  );
};
