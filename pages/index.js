import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

const Home = () => {
 const { status, data: session } = useSession();

  // console.log(session);

   if (status === 'authenticated') {
  return (
   <>
    <head>
     <title>Admin Panel</title>
    </head>
    <div>auth</div>
   </>
  );
 } else if (status === 'unauthenticated') {
  return (
   <>
    <head>
     <title>Admin Panel</title>
    </head>
    <div>UNauth</div>
   </>
  );
 } else if (status === 'loading') {
  <>
    <div>loading</div>
   </>
 }
}

export default Home;
