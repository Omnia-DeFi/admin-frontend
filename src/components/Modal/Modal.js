import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export default function Modal({
  setShowModal,
  onSubmit,
  header,
  children,
  loading,
  buttonName,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <form
              onSubmit={onSubmit}
              className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
            >
              {/*header*/}
              <Header header={header} />
              {/*body*/}
              {children}
              {/*footer*/}
              <Footer
                setShowModal={setShowModal}
                loading={loading}
                buttonName={buttonName}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
