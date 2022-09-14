import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { AddUserForm } from "~/collections";

export const AddUsers = ({
  editMode,
  setEditMode,
  setUsers,
  collection,
  showModal,
  setShowModal,
  user,
  setUser,
}) => {
  const [key, setKey] = useState(0);
  const [email, setEmail] = useState("");
  const [issuer, setIssuer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(user?.email);
    setIssuer(user?.issuer);
    setPhoneNumber(user?.phone_number);
    setPublicAddress(user?.public_address);
  }, [user]);

  async function create(e) {
    e.preventDefault();
    setLoading(true);
    const data = { issuer, email, phoneNumber, publicAddress };
    try {
      fetch(`/api/${collection}/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers((prevData) => [...prevData, data]);
          setLoading(false);
          setShowModal(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function saveDataUpdate(e) {
    setLoading(true);
    e.preventDefault();
    const newData = { issuer, email, phoneNumber: +phoneNumber, publicAddress };
    try {
      fetch(`/api/${collection}/update/${user?.id}`, {
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers((prevUsers) =>
            prevUsers.map((user) => {
              if (user.id === data.id) {
                return data;
              } else return user;
            })
          );
          setShowModal(false);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setShowModal(true);
          setKey(key + 1);
        }}
      >
        Add
      </Button>
      {showModal && (
        <Modal
          key={key}
          confirmLoading={loading}
          visible={showModal}
          title={editMode ? "Edit User" : "Add User"}
          okText={editMode ? "Edit User" : "Add User"}
          onOk={editMode ? saveDataUpdate : create}
          onCancel={() => {
            setShowModal(false);
            setUser({});
            setEditMode(false);
          }}
        >
          <AddUserForm
            email={email}
            setEmail={setEmail}
            issuer={issuer}
            setIssuer={setIssuer}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            publicAddress={publicAddress}
            setPublicAddress={setPublicAddress}
          />
        </Modal>
      )}
    </div>
  );
};
