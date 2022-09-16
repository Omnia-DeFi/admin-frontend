import { Button } from "antd";
import { useState } from "react";
import NotifyModal from "./NotifyModal";

const NotifyUser = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const nofifyButtonHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
    <Button onClick={nofifyButtonHandler}>
      Notify
    </Button>
      {isOpen && (
        <NotifyModal isOpen={isOpen} setIsOpen={setIsOpen} userId={userId} />
      )}
    </>
  );
};

export default NotifyUser;
