import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const deviceId = req.query.id;

  if (req.method === "DELETE") {
    const deletedDevice = await prisma.device
      .delete({
        where: { id: deviceId },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.json(deletedDevice, { message: "Deleted Successfully" });
  } else {
    console.log("Failure");
  }
}
