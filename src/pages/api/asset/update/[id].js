import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const assetId = req.query.id;
  const {
    email,
    issuer,
    documents,
    alertTitle,
    read,
    alertContent,
    alertType,
  } = req.body;

  try {
    let updatedAsset;
    if (req.method === "PUT") {
      updatedAsset = await prisma.asset
        .update({
          where: {
            id: assetId,
          },
          data: {
            user: {
              update: {
                email,
                issuer,
              },
            },
            sender: {
              update: {
                title: alertTitle,
                content: alertContent,
                type: alertType,
                date: new Date(),
                read: true,
              },
            },
          },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json(updatedAsset, { message: "Updated Asset" });
  } catch (error) {
    console.log("Update failure");
  }
}
