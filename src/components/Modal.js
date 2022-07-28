import React from "react";

export default function Modal({ setShowModal, onSubmit, data }) {
//TODO:  Replace issuer, email and id by `data` and destructurate empty string allocation
  const [form, setForm] = React.useState({
    issuer: "",
    email: "",
    id: "",
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*onSubmit: add or update a user*/}
            <form
              onSubmit={onSubmit}
              className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold"> User </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
                  {/*body*/}
                  {/* //TODO:  Replace issuer, email and id by `data` and destructurate empty string allocation */}
                  <div className="relative p-6 flex-auto">
                    <textarea
                      placeholder={"Issuer"}
                      value={form.issuer}
                      onChange={(e) =>
                        setForm({ ...form, issuer: e.target.value })
                      }
                      className="border-2 rounded border-gray-600 p-1    my-4 text-slate-500 text-lg leading-relaxed"
                    />
                  </div>
                  <div className="relative p-6 flex-auto">
                    <textarea
                      placeholder={"Email"}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="border-2 rounded border-gray-600 p-1    my-4 text-slate-500 text-lg leading-relaxed"
                    />
                  </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {/*Add a user to the database*/}
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
