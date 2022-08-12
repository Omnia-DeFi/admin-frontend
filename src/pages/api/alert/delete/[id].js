import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const alertId = req.query.id;

  if (req.method === "DELETE") {
    const deletedAlert = await prisma.alert
      .delete({
        where: { id: alertId },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.json(deletedAlert, { message: "Deleted Successfully" });
  } else {
    console.log("Failure");
  }
}
