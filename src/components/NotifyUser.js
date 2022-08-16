import { useState } from "react";
import NotifyModal from "./NotifyModal";

const NotifyUser = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const nofifyButtonHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={nofifyButtonHandler}
      >
        Notify
      </button>
      {isOpen && <NotifyModal isOpen={isOpen} setIsOpen={setIsOpen} userId={userId} />}
    </>
  );
};

export default NotifyUser;
