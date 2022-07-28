import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const userId = req.query.id;
  const { issuer, email } = req.body;

  try {
    let updatedUser;
    if (req.method === "PUT") {
      updatedUser = await prisma.user
        .update({
          where: {
            id: userId,
          },
          data: { issuer, email },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Update failure");
  }
}
