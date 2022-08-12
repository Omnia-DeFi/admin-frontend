import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const assetId = req.query.id;

  if (req.method === "DELETE") {
    const deletedAsset = await prisma.asset
      .delete({
        where: { id: assetId },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.json(deletedAsset, { message: "Deleted Successfully" });
  } else {
    console.log("Failure");
  }
}
