import Router from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { GoogleButton } from "~/components";

export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") {
    return Router.push("/dashboard/users");
  } else if (status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>
        <div className="mt-72 text-center">
          <GoogleButton />
        </div>
      </>
    );
  } else if (status === "loading") {
    return <p>loading</p>;
  }
}
