import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { AssetContent } from "../../components/Modal/AssetContent";

const UpdateAsset = ({ collection, data }) => {
  const [email, setEmail] = useState(data.owners.email);
  const [issuer, setIssuer] = useState(data.owners.issuer);
  // const [documents, setDocuments] = useState("");
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [AVMUrl, setAVMUrl] = useState(data.AWM);
  const [surveyProofUrl, setSurveyProofUrl] = useState(data.surveyProof);
  const [otherDocumentsUrls, setOtherDocumentsUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [pictureUrls, setPictureUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function saveDataUpdate(e) {
    setLoading(true);
    e.preventDefault();
    const newData = {
      email,
      issuer,
      title,
      description,
      AVM: AVMUrl,
      surveyProof: surveyProofUrl,
      otherDocuments: otherDocumentsUrls,
      videos: videoUrls,
      pictures: pictureUrls,
    };
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
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
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
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            AVMUrl={AVMUrl}
            setAVMUrl={setAVMUrl}
            surveyProofUrl={surveyProofUrl}
            setSurveyProofUrl={setSurveyProofUrl}
            otherDocumentsUrls={otherDocumentsUrls}
            setOtherDocumentsUrls={setOtherDocumentsUrls}
            videoUrls={videoUrls}
            setVideoUrls={setVideoUrls}
            pictureUrls={pictureUrls}
            setPictureUrls={setPictureUrls}
            // documents={documents}
            // setDocuments={setDocuments}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default UpdateAsset;
