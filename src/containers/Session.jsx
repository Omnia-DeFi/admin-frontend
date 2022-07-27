import { useSession } from "next-auth/client";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

export default function Session() {
  const [session, loading] = useSession();
  console.log(session);

  return (
    <>
      {loading && <p>Loading..</p>}
      {!session && (
        <>
          Not signed in <br />
          <SignIn />
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <SignOut />
        </>
      )}
    </>
  );
}
