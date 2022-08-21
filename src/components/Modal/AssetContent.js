/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FormItem } from "../Form";
import MultiUploadFiles from "../Form/MultiUploadFiles/MultiUploadFiles";
import UploadFile from "../Form/UploadFile/UploadFile";

export const AssetContent = ({
  email,
  setEmail,
  issuer,
  setIssuer,
  title,
  setTitle,
  description,
  setDescription,
  AVMUrl,
  setAVMUrl,
  surveyProofUrl,
  setSurveyProofUrl,
  otherDocumentsUrls,
  setOtherDocumentsUrls,
  videoUrls,
  setVideoUrls,
  pictureUrls,
  setPictureUrls,
  showModal,
  operation,
}) => {
  // const [counter, setCounter] = useState(1);
  // const [hasBeenApproved, setHasBeenApproved] = useState(false);
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
      setTitle("");
      setDescription("");
      // setDocuments("");
    }
  }, [showModal]);
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <FormItem
          name={"issuer"}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          label={"Issuer"}
          type={"text"}
        />
        <FormItem
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          type={"email"}
        />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <FormItem
          name={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label={"Title"}
          type={"text"}
        />
        <FormItem
          name={"description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label={"Description"}
          type={"text"}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <UploadFile label="AVM" url={AVMUrl} setUrl={setAVMUrl} />
        <UploadFile
          label="Survey Proof"
          url={surveyProofUrl}
          setUrl={setSurveyProofUrl}
        />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <MultiUploadFiles
          label="Videos"
          urls={videoUrls}
          setUrls={setVideoUrls}
        />
        <MultiUploadFiles
          label="Pictures"
          urls={pictureUrls}
          setUrls={setPictureUrls}
        />
      </div>
      <MultiUploadFiles
        label="Other Documents"
        urls={otherDocumentsUrls}
        setUrls={setOtherDocumentsUrls}
      />
    </div>
  );
};
