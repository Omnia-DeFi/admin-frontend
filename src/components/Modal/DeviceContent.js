/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

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
      <div className="relative px-6 flex-auto">
        <input
          name="issuer"
          placeholder={"Issuer"}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          className="border-2 rounded border-gray-600 p-1 my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input name="title"
          placeholder={"Alert Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input name="content"
          placeholder={"Content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input name="type"
          placeholder={"Type"}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <input name="token"
          placeholder={"Token"}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
    </div>
  );
};
