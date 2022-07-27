import { getSession } from "next-auth/client";
import { db } from "../../../db/db";

export default async (req, res) => {
  const user = await getSession({ req });
  await db.$connect();
  if (!user) return res.json({ error: "Not logged in" });

  const note = await db.Note.findUnique({ where: { id: req.query.id } })
    .catch(console.error)
    .finally(() => db.$disconnect());

  return res.json({ note });
};
