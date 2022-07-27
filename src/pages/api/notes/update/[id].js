import { getSession } from "next-auth/client";
import { db } from "../../../../db/db";

export default async (req, res) => {
  const user = await getSession({ req });

  if (!user) return res.json({ error: "user not logged in" });
  await db.$connect();

  if (req.method === "GET") {
    let note = await db.note.findUnique({ where: { id: req.query.id } })
      .catch(console.error)
      .finally(() => db.$disconnect());
    return res.json({ note });
  }

  if (req.method === "PUT") {
    await db.note.update({
      where: {
        id: req.query.id,
      },
      data: { title: req.body.title, body: req.body.description },
    })
      .catch(console.error)
      .finally(() => db.$disconnect());
  }
  res.end();
};
