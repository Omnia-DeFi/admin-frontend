import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const deviceId = req.query.id;
  const { issuer, email, title, content, type, read, token } = req.body;

  try {
    let updatedDevice;
    if (req.method === "PUT") {
      updatedDevice = await prisma.device
        .update({
          where: {
            id: deviceId,
          },
          data: {
            token,
            user:{
              update: {
                email,
                issuer,
              },
            },
            reciever: {
              update: {
                title,
                content,
                type,
                date: new Date(),
                read,
              }
            }
          },
        })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json(updatedDevice, {message: "Updated Device successfully"});
  } catch (error) {
    console.log("Update failure");
  }
}
