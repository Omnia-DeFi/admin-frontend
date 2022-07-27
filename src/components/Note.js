import Link from "next/link";

export default function Note({ id, title }) {
  return (
    <div>
      <Link href={`/notes/${id}`}>
        <a>
          {" "}
          <h1>{title}</h1>
        </a>
      </Link>
    </div>
  );
}
