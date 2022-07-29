import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const kycId = req.query.id;

  if (req.method === "DELETE") {
    const deletedKyc = await prisma.kyc
      .delete({
        where: { id: kycId },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.json(deletedKyc, {message: "Deleted Successfully"});
  } else {
    console.log("Failure");
  }
}
