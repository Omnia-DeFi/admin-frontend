import { Modal } from "antd";
import React, { useState } from "react";
import { AlertContent } from "./Modal/AlertContent";

const NotifyModal = ({ isOpen, setIsOpen, userId }) => {
  const type = "Information";
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
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setIsOpen(false);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Modal
        title={"Notify"}
        visible={isOpen}
        onOk={sendNotification}
        okText="Notify User"
        confirmLoading={loading}
        onCancel={() => setIsOpen(false)}
      >
        <AlertContent
          title={title}
          setTitle={setTitle}
          content={content}
          type={type}
          setContent={setContent}
          showModal={isOpen}
          operation={"add"}
        />
      </Modal>
    </>
  );
};

export default NotifyModal;
