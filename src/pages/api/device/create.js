import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const { issuer, email, title, content, type, read, token } = req.body;

  try {
    const createdDevice = await prisma.device
      .create({
        data: {
          token,
          user: {
            create: {
              email,
              issuer,
            },
          },
          reciever: {
            create: {
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
    res.status(200).json({ message: "Device created", createdDevice });
  } catch (error) {
    console.log("Failure");
  }
}
