import React, { useState } from "react";
import { AlertContent } from "./Modal/AlertContent";
import  Modal  from "./Modal/Modal";

const NotifyModal = ({isOpen, setIsOpen, userId }) => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendNotification(e) {
    const data = { userId, type, title, content };
    setLoading(true);

    try {
      fetch(`/api/notification/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     <Modal
          header={"Notify"}
          setShowModal={setIsOpen}
          onSubmit={sendNotification}
          buttonName="Notify User"
          loading={loading}
        >
          <AlertContent
            title={title}
            setTitle={setTitle}
            content={content}
            type={type}
            setType={setType}
            setContent={setContent}
            showModal={isOpen}
            operation={"add"}
          />
        </Modal>
    </>
  );
};

export default NotifyModal;