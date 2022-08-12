/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const AssetContent = ({
  email,
  setEmail,
  issuer,
  setIssuer,
  alertTitle,
  setAlertTitle,
  alertType,
  setAlertType,
  alertContent,
  setAlertContent,
  documents,
  setDocuments,
  showModal,
  operation,
}) => {
  const [counter, setCounter] = useState(1);
  const [hasBeenApproved, setHasBeenApproved] = useState(false);
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
      setAlertTitle("");
      setAlertContent("");
      setAlertType("");
      setDocuments("");
    }
  }, [showModal]);
  return (
    <div>
      <div className="relative px-6 flex-auto">
        <input
          name="email"
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input
          name="issuer"
          placeholder={"Issuer"}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input
          name="title"
          placeholder={"Alert Title"}
          value={alertTitle}
          onChange={(e) => setAlertTitle(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input
          name="content"
          placeholder={"Content"}
          value={alertContent}
          onChange={(e) => setAlertContent(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input
          name="type"
          placeholder={"Type"}
          value={alertType}
          onChange={(e) => setAlertType(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      {/* {documents.map((doc, index) => (
        <div key={index} className="relative px-6 flex-auto">
        <input
          name="type"
          placeholder={"Type"}
          value={alertType}
          onChange={(e) => setAlertType(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      ))} */}
    </div>
  );
};
