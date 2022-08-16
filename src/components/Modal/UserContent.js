/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

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
    <div className="relative z-0 mb-6 w-full group">
        <input type="tel" name="issuer" id="issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="issuer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Issuer</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input type="number" name="floating_phone" id="floating_phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="publicAddress" id="publicAddress" value={publicAddress} onChange={(e) => setPublicAddress(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="publicAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Public Address</label>
    </div>
  </div>

      {/* <div className="relative px-6 flex-auto">
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
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 py-4 flex-auto">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          name="phone-number"
          placeholder={"Phone Number"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div>
      <div className="relative px-6 py-4 flex-auto">
        <label htmlFor="public-address">Public Address</label>
        <input
          name="public-address"
          placeholder={"Public Adrress"}
          value={publicAddress}
          onChange={(e) => setPublicAddress(e.target.value)}
          className="border-2 rounded border-gray-600 p-1    my-[8px] text-slate-500 text-lg leading-relaxed"
        />
      </div> */}
    </div>
  );
};
