import Session from "../containers/Session";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Session />
      <Link href="/dashboard">
        <a>Go to dashboard</a>
      </Link>
    </div>
  );
}
