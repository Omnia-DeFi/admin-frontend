/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const UserContent = ({
  issuer,
  email,
  setEmail,
  setIssuer,
  showModal,
  operation,
}) => {
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
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
      <div className="relative px-6 py-4 flex-auto">
        <label htmlFor="issuer">Email</label>
        <input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
    </div>
  );
};
