/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const KycContent = ({
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
    }
  }, [showModal]);
  return (
    <div>
      <div className="relative px-6 flex-auto">
        <label htmlFor="issuer">Issuer</label>
        <input
          name="issuer"
          placeholder={"Issuer"}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          className="border-2 rounded border-gray-600 p-1 my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <label htmlFor="email">Email</label>
        <input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <label htmlFor="title">Alert Title</label>
        <input name="title"
          placeholder={"Alert Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <label htmlFor="content">Alert Content</label>
        <input name="content"
          placeholder={"Content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 flex-auto">
        <label htmlFor="type">Alert Type</label>
        <input name="type"
          placeholder={"Type"}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
    </div>
  );
};
