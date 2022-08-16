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
      <div
        id="defaultModal"
        tabIndex="-1"
        className="flex justify-center items-center mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
          <div className="relative bg-white rounded-lg shadow">
            <form
              // onSubmit={onSubmit}
              className="mx-auto space-y-6 flex flex-col items-stretch pr-8 pl-8"
            >
              {/*header*/}
              <Header header={header} setShowModal={setShowModal} />
              {/*body*/}
              {children}
              {/*footer*/}
              <Footer
                 onSubmit={onSubmit}
                setShowModal={setShowModal}
                loading={loading}
                buttonName={buttonName}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="fixed z-20 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
    </>
  );
}
