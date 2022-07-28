import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal";

const AddData = ({ collection, data }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function create() {
    try {
      fetch(`http://localhost:3000/api/${collection}/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        updateParentForm({ issuer: "", email: "", id: "" });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowAddModal(true)}
      >
        Add
      </button>

      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          onSubmit={method_above}
          data={data}
        />
      ) : null}
    </>
  );
};

export default AddData;
