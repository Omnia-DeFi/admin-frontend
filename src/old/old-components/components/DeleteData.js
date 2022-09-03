import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";

const DeleteDataFrom = ({ collection, data }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState();
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function deleteDataFrom() {
    setLoading(true);
    try {
      fetch(`/api/${collection}/delete/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          refreshData();
          setLoading(false);
        });
    } catch (error) {
      console.log("delete: ", error);
    }
  }

  return (
    <>
      <button
        className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        DELETE
      </button>
      {showModal && (
        <Modal
          header="Are you sure"
          setShowModal={setShowModal}
          onSubmit={deleteDataFrom}
          loading={loading}
          buttonName="Delete"
        >
          <p className="text-left">Are you sure you want to delete? </p>
        </Modal>
      )}
    </>
  );
};

export default DeleteDataFrom;
