import {useEffect} from 'react';
import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { GoogleButton } from "~/components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if(status === 'authenticated') {
      router.push('/dashboard/users')
    }
  }, [status])


  if(status === 'loading') {
    return <p>loading</p>;
  }else if(status === 'unauthenticated') {
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
  }else {
    return <div/>
  }
}