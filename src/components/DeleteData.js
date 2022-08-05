import { useRouter } from "next/router";

const DeleteDataFrom = ({ collection, data }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function deleteDataFrom() {
    try {
      fetch(`/api/${collection}/delete/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => refreshData());
    } catch (error) {
      console.log("delete: ", error);
    }
  }

  return (
    <>
      <button
        className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => deleteDataFrom()}
      >
        DELETE
      </button>
    </>
  );
};

export default DeleteDataFrom;
