import { getSession } from "next-auth/client";
import { db } from "../../../db/db";

export default async (req, res) => {
  const user = await getSession({ req });

  await db.$connect();

  if (!user) {
    return res.json({ error: "not logged in" });
  }

  await db.Note.create({
    data: {
      title: req.body.title,
      description: req.body.body,
    },
  })
    .catch(console.error)
    .finally(() => db.$disconnect());

  res.end();
};
