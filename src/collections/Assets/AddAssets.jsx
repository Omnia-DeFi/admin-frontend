import { Button, Modal } from "antd";
import { useState } from "react";
import { AddAssetForm } from "../Form";

export const AddAssets = ({editMode, setEditMode, setAssets, collection, showModal, setShowModal, asset, setAsset}) => {
  const [key, setKey] = useState(0);
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
          console.log("Data", data)
          setAssets((prevData) => [...prevData, data.createdAsset]);
          setLoading(false);
          setShowModal(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const saveDataUpdate = () => {
    console.log("Save Data Update")
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setShowModal(true);
          setKey(key + 1);
        }}
      >
        Add
      </Button>

      {showModal && (
        <Modal
          key={key}
          confirmLoading={loading}
          visible={showModal}
          title={editMode? "Edit Asset": "Add Asset"}
          okText={editMode? "Edit Asset": "Add Asset"}
          onOk={editMode? saveDataUpdate: create}
          onCancel={() => {
            setShowModal(false);
            setAsset({});
            setEditMode(false);
          }}
        >
          <AddAssetForm
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
          />
        </Modal>
      )}
    </div>
  )
};
