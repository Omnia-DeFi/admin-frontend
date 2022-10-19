import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { GoogleButton } from "~/components";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log("status is:", status);
    // router.push("/dashboard/users");
    window.location = "/dashboard/users";
  } else if (status === "unauthenticated") {
    console.log("status is:", status);
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
    console.log("status is:", status);
    return <p>loading</p>;
  }
}
