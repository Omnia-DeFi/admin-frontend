import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { GoogleButton } from "~/components";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("router is", router);

  if (status === "authenticated") {
    router.replace("/dashboard/users");
    // window.location =  "http://localhost:3000/dashboard/hello";
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
    return <p>loading</p>;
  }
}
