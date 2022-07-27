import { signOut } from "next-auth/client";

export default function SignOut() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
  );
}
