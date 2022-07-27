import { useRouter } from "next/router";

export default function DeleteNote({ id }) {
  const router = useRouter();

  const sendDelete = async () => {
    const res = await fetch(`/api/notes/delete/${id}`, {
      method: "DELETE",
    });
    router.push("/dashboard");
  };

  return <button onClick={() => sendDelete()}>Delete</button>;
}
