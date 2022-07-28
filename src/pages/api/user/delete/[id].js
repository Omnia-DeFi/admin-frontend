import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const userId = req.query.id;

  if (req.method === "DELETE") {
    const note = await prisma.user
      .delete({
        where: { id: userId },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.json(note);
  } else {
    console.log("Note could not be created");
  }
}
