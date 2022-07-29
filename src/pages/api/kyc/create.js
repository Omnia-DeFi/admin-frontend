import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const { issuer, email, title, content, type, date, read } = req.body;

  try {
    const createdKyc = await prisma.kyc
      .create({
        data: {
          user: {
            create: {
              email,
              issuer,
            },
          },
          triggerer: {
            create: {
              title,
              content,
              type,
              date,
              read,
            },
          },
        },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Kyc created", createdKyc });
  } catch (error) {
    console.log("Failure");
  }
}
