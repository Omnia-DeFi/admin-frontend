import { prisma } from "../../../../prisma/prisma";

export default async function handler(
  req,
  res 
) {
  const noteId = req.query.id;

  if (req.method === "DELETE") {
    const note = await prisma.note.delete({
      where: { id: noteId },
    });
    res.json(note);
  } else {
    console.log("Note could not be created");
  }
}
