import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { AssetContent } from "../../components/Modal/AssetContent";

const AddAsset = ({ collection }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [issuer, setIssuer] = useState("");
  const [alertTitle, setAlertTitle] = useState(true);
  const [alertContent, setAlertContent] = useState(true);
  const [alertType, setAlertType] = useState(true);
  const [loading, setLoading] = useState(false);
  const [AVMUrl, setAVMUrl] = useState("");
  const [surveryProofUrl, setSurveryProofUrl] = useState("");
  const [otherDocumentsUrls, setOtherDocumentsUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [pictureUrls, setPictureUrls] = useState([]);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function create(e) {
    setLoading(true);
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      issuer,
      alertTitle,
      alertType,
      read: true,
      alertContent,
    };
    try {
      fetch(`/api/${collection}/create`, {
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
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add
      </button>

      {showModal ? (
        <Modal
          header={"Asset"}
          setShowModal={setShowModal}
          onSubmit={create}
          loading={loading}
          buttonName={"Add Asset"}
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
            AVMUrl={AVMUrl}
            setAVMUrl={setAVMUrl}
            surveryProofUrl={surveryProofUrl}
            setSurveryProofUrl={setSurveryProofUrl}
            otherDocumentsUrls={otherDocumentsUrls}
            setOtherDocumentsUrls={setOtherDocumentsUrls}
            videoUrls={videoUrls}
            setVideoUrls={setVideoUrls}
            pictureUrls={pictureUrls}
            setPictureUrls={setPictureUrls}
            operation={"add"}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default AddAsset;
