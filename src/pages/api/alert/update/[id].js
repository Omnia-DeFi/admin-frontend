import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const alertId = req.query.id;
  const { title, content, type, read } = req.body;

  try {
    let updatedAlert;
    if (req.method === "PUT") {
      updatedAlert = await prisma.alert
        .update({
          where: {
            id: alertId,
          },
          data: {
            title,
            content,
            type,
            date: new Date(),
            read,
          },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res
      .status(200)
      .json(updatedAlert, { message: "Updated Alert successfully" });
  } catch (error) {
    console.log("Update failure");
  }
}
