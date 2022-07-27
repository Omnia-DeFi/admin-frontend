import { getSession } from "next-auth/client";
import { db } from "../../../../db/db";

export default async (req, res) => {
  await db.$connect();
  const session = await getSession({ req });
  
  if (!session) {
    return res.json({ error: "not logged in" });
  } else {
    await db.note
      .delete({
        where: {
          id: req.query.id,
        },
      })
      .catch(console.error)
      .finally(() => db.$disconnect());
    res.end();
  }
};
