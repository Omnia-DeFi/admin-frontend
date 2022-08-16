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
      <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black bg-opacity-50 h-full">
        <div className=" flex justify-center items-center ">
          <div className=" w-[400px] flex gap-y-2 flex-col rounded-md p-5 bg-white">
            <div className="flex flex-col gap-y-2 ">
              <input
                onChange={(e) => setType(e.target.value)}
                value={type}
                placeholder="Type"
                className="w-full p-2 border-2 rounded-md"
                type="text"
              />
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
                className="w-full p-2 border-2 rounded-md"
                type="text"
              />
              <input
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Content"
                className="w-full p-2 border-2 rounded-md"
                type="text"
              />
            </div>
            {loading && <p>Submitting...</p>}

            <div className="gap-2 flex">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-red-500 rounded-md text-white"
              >
                Close
              </button>
              <button
                onClick={sendNotification}
                className="p-2 bg-green-500 rounded-md text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotifyModal;
