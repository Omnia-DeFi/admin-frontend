import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { AlertContent } from "./Modal/AlertContent";

const UpdateAlert = ({ collection, data }) => {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [type, setType] = useState(data.type);
  // const [token, setToken] = useState(data.token);
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
      fetch(`/api/${collection}/update/${data.id}`, {
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
          <AlertContent
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

export default UpdateAlert;
