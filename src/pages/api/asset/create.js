import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const { email, issuer, documents, alertTitle, read, alertContent, alertType } = req.body;

  try {
    const createdAsset = await prisma.asset
      .create({
        data: {
          user: {
            create: {
              email,
              issuer,
            }
          },
          // documents: {
          //   create: documents
          // },
          sender: {
            create: {
              title: alertTitle,
              date: new Date(),
              read,
              content: alertContent,
              type: alertType,
            }
          },
        }
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Asset created", createdAsset });
  } catch (error) {
    console.log("Failure");
  }
}
