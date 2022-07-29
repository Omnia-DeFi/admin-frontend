import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import { UserContent } from "../components/Modal/UserContent";

const UpdateData = ({ collection, data }) => {
  const [email, setEmail] = useState(data.email);
  const [issuer, setIssuer] = useState(data.issuer);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function saveDataUpdate(e) {
    e.preventDefault();
    const newData = { issuer, email };
    try {
      console.log(data);
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
          header={"Update"}
          setShowModal={setShowModal}
          data={data}
          onSubmit={saveDataUpdate}
          buttonName="Update User"
        >
          <UserContent
            email={email}
            issuer={issuer}
            setEmail={setEmail}
            setIssuer={setIssuer}
            showModal={showModal}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default UpdateData;
