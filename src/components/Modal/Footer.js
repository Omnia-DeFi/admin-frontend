import React, { useEffect, useRef } from "react";
import Loader from "../Loader/Loader";

const Footer = ({ setShowModal, buttonName, loading, onSubmit }) => {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if(!loading) {
      setShowModal(false);
    }
  }, [loading]);
  
  return (
    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
      <button
      onClick={onSubmit}
        data-modal-toggle="defaultModal"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <div className="flex justify-center items-center">
          {loading && <Loader />}
          {buttonName}
        </div>
      </button>
      <button
        onClick={() => setShowModal(false)}
        data-modal-toggle="defaultModal"
        type="button"
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
      >
        Close
      </button>
    </div>
  );
};

export default Footer;
