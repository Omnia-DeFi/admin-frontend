import Router from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";
import GoogleBtn from "../components/GoogleBtn";
import Loading from "../components/Loading";

export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") {
    return Router.push("/dashboard");
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
