/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FormItem } from "../Form";

export const DeviceContent = ({
  issuer,
  email,
  setEmail,
  setIssuer,
  title,
  setTitle,
  content,
  setContent,
  type,
  setType,
  token,
  setToken,
  showModal,
  operation,
}) => {
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
      setTitle("");
      setContent("");
      setType("");
      setToken("");
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
          label={"Alert Title"}
          type={"text"}
        />
        <FormItem
          name={"type"}
          value={type}
          onChange={(e) => setType(e.target.value)}
          label={"Alert Type"}
          type={"text"}
        />
        
      </div>

      
      <div className="grid md:grid-cols-2 md:gap-6">
      <FormItem
          name={"content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label={"Alert Content"}
          type={"text"}
        />
        <FormItem
          name={"token"}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          label={"Token"}
          type={"text"}
        />
        
      </div>

    </div>
  );
};
