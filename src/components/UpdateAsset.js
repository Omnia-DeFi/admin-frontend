import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { AssetContent } from "./Modal/AssetContent";

const UpdateAsset = ({ collection, data }) => {
  const [email, setEmail] = useState(data.user.email);
  const [issuer, setIssuer] = useState(data.user.issuer);
  // const [documents, setDocuments] = useState("");
  const [alertTitle, setAlertTitle] = useState(data.sender.title);
  const [alertContent, setAlertContent] = useState(data.sender.content);
  const [alertType, setAlertType] = useState(data.sender.type);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function saveDataUpdate(e) {
    console.log(data.id);
    e.preventDefault();
    const newData = { email, issuer, alertTitle, alertType, read: true, alertContent };
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
          header={"Asset"}
          setShowModal={setShowModal}
          onSubmit={saveDataUpdate}
          loading={loading}
          buttonName={"Update Asset"}
        >
          <AssetContent
            email={email}
            setEmail={setEmail}
            issuer={issuer}
            setIssuer={setIssuer}
            alertTitle={alertTitle}
            setAlertTitle={setAlertTitle}
            alertContent={alertContent}
            setAlertContent={setAlertContent}
            alertType={alertType}
            setAlertType={setAlertType}
            // documents={documents}
            // setDocuments={setDocuments}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default UpdateAsset;
