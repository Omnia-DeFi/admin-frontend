import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noteId = req.query.id;
  const { title, content } = req.body;

  try {
    if (req.method === "GET") {
      let note = await prisma.note.findUnique({
        where: { id: noteId as string },
      });
      return res.json({ note });
    }

    if (req.method === "PUT") {
      await prisma.note.update({
        where: {
          id: noteId as string,
        },
        data: { title, content },
      });
    }

    res.status(200).json({ message: "Note Updated" });
  } catch (error) {
    console.log("Update failure");
  }
}
