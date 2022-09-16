import { useRouter } from "next/router";
import { useState } from "react";
// import Modal from "../../components/Modal/Modal";
import { Modal, Button } from "antd";
import { AssetContent } from "../../components/Modal/AssetContent";

const AddAsset = ({ collection }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [issuer, setIssuer] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [AVMUrl, setAVMUrl] = useState("");
  const [surveyProofUrl, setSurveyProofUrl] = useState("");
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
      title,
      description,
      AVM: AVMUrl,
      surveyProof: surveyProofUrl,
      otherDocuments: otherDocumentsUrls,
      videos: videoUrls,
      pictures: pictureUrls,
      read: true,
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
      <Button type="inverted" onClick={() => setShowModal(true)}>
        Add
      </Button>

      {showModal ? (
        <Modal
          okText="Add Asset"
          title="Add Asset"
          visible={showModal}
          onOk={create}
          onCancel={() => setShowModal(false)}
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
            operation={"add"}
          />
        </Modal>
      ) : // <Modal
      //   header={"Asset"}
      //   setShowModal={setShowModal}
      //   onSubmit={create}
      //   loading={loading}
      //   buttonName={"Add Asset"}
      // >
      //   <AssetContent
      //     email={email}
      //     setEmail={setEmail}
      //     issuer={issuer}
      //     setIssuer={setIssuer}
      //     title={title}
      //     setTitle={setTitle}
      //     description={description}
      //     setDescription={setDescription}
      //     AVMUrl={AVMUrl}
      //     setAVMUrl={setAVMUrl}
      //     surveyProofUrl={surveyProofUrl}
      //     setSurveyProofUrl={setSurveyProofUrl}
      //     otherDocumentsUrls={otherDocumentsUrls}
      //     setOtherDocumentsUrls={setOtherDocumentsUrls}
      //     videoUrls={videoUrls}
      //     setVideoUrls={setVideoUrls}
      //     pictureUrls={pictureUrls}
      //     setPictureUrls={setPictureUrls}
      //     operation={"add"}
      //   />
      // </Modal>
      null}
    </>
  );
};

export default AddAsset;
