import { signIn } from "next-auth/client";

export default function SignIn() {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "http://localhost:3000/dashboard",
        })
      }
    >
      Sign in
    </button>
  );
}
