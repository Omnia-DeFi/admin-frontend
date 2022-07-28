import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { prisma } from "../prisma/prisma";
import Head from "next/head";

import Navbar from "../components/Navbar";

const Dashboard = ({ notes }) => {
  const [form, setForm] = useState({
    issuer: "",
    email: "",
    id: "",
  });
  const [exist, setExist] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function create(data) {
    try {
      fetch("http://localhost:3000/api/note/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({ issuer: "", email: "", id: "" });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateNote(data) {
    try {
      fetch(`http://localhost:3000/api/note/update/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }).then(() => {
        setExist(true);
        setForm({ issuer: data.issuer, email: data.email, id: data.id });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function saveUpdate(data) {
    try {
      fetch(`http://localhost:3000/api/note/update/${data.id}`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then(() => {
        setForm({ issuer: "", email: "", id: "" });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote(id) {
    try {
      fetch(`http://localhost:3000/api/note/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data) => {
    try {
      exist ? saveUpdate(data) : create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Navbar />

      <h1 className="text-center font-bold text-2xl mt-4">User</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          placeholder="Issuer"
          value={form.issuer}
          onChange={(e) => setForm({ ...form, issuer: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />
        <textarea
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          {exist ? "Update" : "Add +"}
        </button>
      </form>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <ul>
          {notes.map((note) => (
            <li key={note.id} className="border-b border-gray-600 p-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">{note.issuer}</h3>
                  <p className="text-sm">{note.email}</p>
                </div>
                <button
                  onClick={() =>
                    updateNote({
                      issuer: note.issuer,
                      email: note.email,
                      id: note.id,
                    })
                  }
                  className="bg-blue-500 mr-3 px-3 text-white rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 px-3 text-white rounded"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const notes = await prisma.user.findMany({
    select: {
      issuer: true,
      id: true,
      email: true,
    },
  });

  return {
    props: {
      notes,
    },
  };
};
