/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FormItem } from "../Form";

export const UserContent = ({
  issuer,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  publicAddress,
  setPublicAddress,
  setIssuer,
  showModal,
  operation,
}) => {
  useEffect(() => {
    if (operation === "add") {
      setEmail("");
      setIssuer("");
      setPhoneNumber("");
      setPublicAddress("");
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
          name={"floating_phone"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label={"Phone Number"}
          type={"number"}
        />
        <FormItem
          name={"publicAddress"}
          value={publicAddress}
          onChange={(e) => setPublicAddress(e.target.value)}
          label={"Public Address"}
          type={"text"}
        />
      </div>
    </div>
  );
};
