import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { UserContent } from "./Modal/UserContent";

const NotifyUser = ({ userId }) => {

  async function create(e) {
    const data = { userId };
    console.log(data)

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
        console.log(data);
      });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={create}
      >
        Notify
      </button>
    </>
  );
};

export default NotifyUser;
