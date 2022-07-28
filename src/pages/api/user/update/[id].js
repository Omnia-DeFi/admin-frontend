import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const userId = req.query.id;
  const { issuer, email } = req.body;

  try {
    if (req.method === "GET") {
      let note = await prisma.user
        .findUnique({
          where: { id: userId },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
      return res.json({ note });
    }

    if (req.method === "PUT") {
      await prisma.user
        .update({
          where: {
            id: userId,
          },
          data: { issuer, email },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json({ message: "Note Updated" });
  } catch (error) {
    console.log("Update failure");
  }
}
