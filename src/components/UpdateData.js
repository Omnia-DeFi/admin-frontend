import { useState } from "react";
import Modal from "./Modal";

const UpdateData = ({ collection, data, setForm, updateParentExist }) => {
  const [showModal, setShowModal] = useState(false);

  async function fetchExistingData() {
    try {
      fetch(`http://localhost:3000/api/${collection}/update/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }).then(() => {
        // TODO: to complete and refactor
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function saveDataUpdate() {
    try {
      fetch(`http://localhost:3000/api/${collection}/update/${data.id}`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then(() => {
        // TODO: to complete and refactor
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // TODO: Show modal to update data: make the model interact with these functions
    <>
      <button
        className="bg-orange-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
      {showModal ? (
        <Modal setShowModal={setShowModal}  data={data} />
      ) : null}
    </>
  );
};

export default UpdateData;
