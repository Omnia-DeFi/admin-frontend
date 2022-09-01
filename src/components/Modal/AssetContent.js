/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FormItem } from "../Form";

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
  // documents,
  // setDocuments,
  showModal,
  operation,
}) => {
  // const [counter, setCounter] = useState(1);
  // const [hasBeenApproved, setHasBeenApproved] = useState(false);
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
      setAlertTitle("");
      setAlertContent("");
      setAlertType("");
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
          value={alertTitle}
          onChange={(e) => setAlertTitle(e.target.value)}
          label={"Alert Title"}
          type={"text"}
        />
        <FormItem
          name={"type"}
          value={alertType}
          onChange={(e) => setAlertType(e.target.value)}
          label={"Alert Type"}
          type={"text"}
        />
      </div>
      <FormItem
        name={"content"}
        value={alertContent}
        onChange={(e) => setAlertContent(e.target.value)}
        label={"Alert Content"}
        type={"text"}
      />
    </div>
  );
};
