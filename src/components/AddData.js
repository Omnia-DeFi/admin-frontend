import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { UserContent } from "../components/Modal/UserContent";

const AddData = ({ collection }) => {
  const [showModal, setShowModal] = useState(false);
  const [issuer, setIssuer] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function create(e) {
    e.preventDefault();
    setLoading(true);
    const data = {issuer, email}
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
    setLoading(false);
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
          header={"User"}
          setShowModal={setShowModal}
          onSubmit={create}
          loading={loading} 
        >
          <UserContent email={email} issuer={issuer} setEmail={setEmail} setIssuer={setIssuer} showModal={showModal} />
        </Modal>
      ) : null}
    </>
  );
};

export default AddData;
