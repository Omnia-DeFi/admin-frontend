import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const kycId = req.query.id;
  const { issuer, email, title, content, type, read } = req.body;

  try {
    let updatedKyc;
    if (req.method === "PUT") {
      updatedKyc = await prisma.kyc
        .update({
          where: {
            id: kycId,
          },
          data: {
            user: {
              update: {
                email,
                issuer,
              },
            },
            triggerer: {
              update: {
                title,
                content,
                type,
                date: new Date(),
                read,
              },
            },
          },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json(updatedKyc, { message: "Updated Kyc" });
  } catch (error) {
    console.log("Update failure");
  }
}
