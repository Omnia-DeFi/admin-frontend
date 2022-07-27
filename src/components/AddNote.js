import Link from "next/link";

export default function AddNote() {
  return (
    <button>
      <Link href="/notes/add">Add</Link>
    </button>
  );
}
