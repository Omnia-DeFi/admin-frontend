import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { KycContent } from "./Modal/KycContent";

const UpdatedKyc = ({ collection, data }) => {
  const [email, setEmail] = useState(data.user.email);
  const [issuer, setIssuer] = useState(data.user.issuer);
  const [title, setTitle] = useState(data.triggerer.title);
  const [content, setContent] = useState(data.triggerer.content);
  const [type, setType] = useState(data.triggerer.type);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function saveDataUpdate(e) {
    e.preventDefault();
    const newData = { issuer, email, title, content, type, read: true};
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
          header={"Update Kyc"}
          setShowModal={setShowModal}
          data={data}
          onSubmit={saveDataUpdate}
          buttonName="Update Kyc"
        >
          <KycContent
            email={email}
            issuer={issuer}
            setEmail={setEmail}
            setIssuer={setIssuer}
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

export default UpdatedKyc;
