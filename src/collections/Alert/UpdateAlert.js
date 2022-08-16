import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { AlertContent } from "../../components/Modal/AlertContent";

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
    const newData = { title, content, type, read: true };
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
          header={"Update Alert"}
          setShowModal={setShowModal}
          data={data}
          onSubmit={saveDataUpdate}
          buttonName="Update Alert"
        >
          <AlertContent
            title={title}
            setTitle={setTitle}
            content={content}
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
