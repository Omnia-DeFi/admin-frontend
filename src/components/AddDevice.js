import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { KycContent } from "./Modal/KycContent";

const AddDevice = ({ collection }) => {
  const [showModal, setShowModal] = useState(false);
  const [issuer, setIssuer] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function create(e) {
    e.preventDefault();
    const data = { issuer, email, title, content, type, read: true };
    try {
      fetch(`http://localhost:3000/api/${collection}/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
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
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add
      </button>

      {showModal ? (
        <Modal
          header={"Add Kyc"}
          setShowModal={setShowModal}
          onSubmit={create}
          buttonName="Add Kyc"
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
            operation={"add"}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default AddDevice;
