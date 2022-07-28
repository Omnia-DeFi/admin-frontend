import { useSession } from "next-auth/react";
import Head from "next/head";
import GoogleBtn from "../components/GoogleBtn";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
export default function Home() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Admin Panel</title>
        </Head>
        <Navbar session={session} />
      </>
    );
  } else if (status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>
        <div className="mt-72 text-center">
          <GoogleBtn />
        </div>
      </>
    );
  } else if (status === "loading") {
    return <Loading />;
  }
}
