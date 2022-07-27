export default function Specific({ data }) {
  return (
    <>
      {data.note[0] && (
        <div>
          <h1>{data.note[0].title}</h1>
          <p>{data.note[0].description}</p>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const hostname = "http://localhost:3000";
  const options = { headers: { cookie: context.req.headers.cookie } };

  const res = await fetch(
    `${hostname}/api/notes/${context.params.id}`,
    options
  );
  const json = await res.json();

  if (json.error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: json,
    },
  };
}
