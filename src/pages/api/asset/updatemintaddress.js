import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const assetId = req.query.id;
  const { id, mintAddress } = req.body;

  try {
    let updatedAsset;
    if (req.method === "PUT") {
      updatedAsset = await prisma.asset
        .update({
          where: {
            id,
          },
          data: {
            mintAddress,
          },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }
    res.status(200).json(updatedAsset, { message: "Updated Asset" });
  } catch (error) {
    console.log("Update failure: ", error);
    res.status(500).json({}, { message: "Error while updating mint address" });
  }
}
