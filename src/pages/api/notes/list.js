import { getSession } from "next-auth/client";
import { db } from "../../../db/db";

export default async (req, res) => {
  const user = await getSession({ req });

  if (user) {
    console.log("user id: " + user.id);

    try {
      await db.$connect();

      const tasksdata = await db.Note.findMany({
        select: {
          id: true,
          title: true,
          description: true,
        },
      }).finally(() => db.$disconnect());

      return res.status(201).json(tasksdata);
    } catch (error) {
      return res.status(400).json({ msg: "Error Fetching Tasks" });
    }

    // const notes = await Note.find({ user: user.id }).lean();
    // return res.json({ notes });
  } else res.json({ error: "Not logged in" });
};
