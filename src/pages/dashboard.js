import { useSession, getSession } from "next-auth/client";
import Link from "next/link";
import SignOut from "../components/SignOut";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import DeleteNote from "../components/DeleteNote";
import UpdateNote from "../components/UpdateNote";
import { Fragment } from "react";

export default function Dashboard({ data }) {
  const [session, loading] = useSession();

  return (
    <div>
      {data.map((item) => (
        <Fragment key={item.id}>
          <Note id={item.id} title={item.title} body={item.description} />
          <UpdateNote id={item.id} />
          <DeleteNote id={item.id} />
        </Fragment>
      ))}

      <br />
      <br />
      <br />
      <AddNote />
      <SignOut />
    </div>
  );
}
export async function getServerSideProps(context) {
  const hostname = "http://localhost:3000";
  const options = { headers: { cookie: context.req.headers.cookie } };
  const res = await fetch(`${hostname}/api/notes/list`, options);
  const json = await res.json();
  if (json.error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: json,
    },
  };
}
