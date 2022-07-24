import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
export default function Home() {
 const { data: session } = useSession();

 if (session) {
  return (
   <>
    <Head>
     <title>Admin Panel</title>
    </Head>
    <Navbar session={session} />;
   </>
  );
 } else {
  const router = useRouter();
  useEffect(() => {
   router.push('/api/auth/signin');
  }, []);
  return (
   <>
    <Head>
     <title>Login</title>
    </Head>
    <div className='mt-40 text-center'>Loading...</div>
   </>
  );
 }
}
