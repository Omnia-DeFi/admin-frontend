import Link from "next/link";
import { useRouter } from "next/router";

export default function UpdateNote({ id }) {
  return (
    <button>
      <Link href={`/notes/update/${id}`}>Update</Link>
    </button>
  );
}
