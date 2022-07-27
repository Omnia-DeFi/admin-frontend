import { useSession, getSession } from "next-auth/client";
import Link from "next/link";
import SignOut from "../components/SignOut";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import DeleteNote from "../components/DeleteNote";
import UpdateNote from "../components/UpdateNote";

export default function Dashboard({ data }) {
  const [session, loading] = useSession();

  return (
    <div>
      {data.map((item) => (
        <>
          <Note
            key={item._id}
            id={item._id}
            title={item.title}
            body={item.description}
          />
          <UpdateNote id={item._id} />
          <DeleteNote id={item._id} />
        </>
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
