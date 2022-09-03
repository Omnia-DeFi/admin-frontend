import { Button, Modal } from "antd";
import { useState } from "react";
import { AddUserForm } from "~/collections";


export const AddUsers = ({setUsers}) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [issuer, setIssuer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [loading, setLoading] = useState(false);

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
          setUsers(data)
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Button type="primary" onClick={() => setShowModal(true)}>Add</Button>
      {showModal && (
        <Modal confirmLoading={loading} visible={showModal} title="Add User" okText="Add User" onOk={create} onCancel={() => setShowModal(false)}>
          <AddUserForm email={email} setEmail={setEmail} issuer={issuer} setIssuer={setIssuer} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} publicAddress={publicAddress} setPublicAddress={setPublicAddress} />
        </Modal>
      )}
    </div>
  );
};
