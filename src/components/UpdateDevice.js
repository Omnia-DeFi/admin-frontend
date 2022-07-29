import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { DeviceContent } from "./Modal/DeviceContent";

const UpdateDevice = ({ collection, data }) => {
  const [email, setEmail] = useState(data.user.email);
  const [issuer, setIssuer] = useState(data.user.issuer);
  const [title, setTitle] = useState(data.reciever.title);
  const [content, setContent] = useState(data.reciever.content);
  const [type, setType] = useState(data.reciever.type);
  const [token, setToken] = useState(data.token);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function saveDataUpdate(e) {
    console.log(data.id);
    e.preventDefault();
    const newData = { issuer, email, title, content, type, read: true, token };
    try {
      console.log(newData);
      fetch(`http://localhost:3000/api/${collection}/update/${data.id}`, {
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refreshData();
        });
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  }

  return (
    <>
      <button
        className="bg-orange-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
      {showModal ? (
        <Modal
          header={"Update Device"}
          setShowModal={setShowModal}
          data={data}
          onSubmit={saveDataUpdate}
          buttonName="Update Device"
        >
          <DeviceContent
            email={email}
            issuer={issuer}
            setEmail={setEmail}
            setIssuer={setIssuer}
            title={title}
            setTitle={setTitle}
            content={content}
            token={token}
            setToken={setToken}
            type={type}
            setType={setType}
            setContent={setContent}
            showModal={showModal}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default UpdateDevice;
