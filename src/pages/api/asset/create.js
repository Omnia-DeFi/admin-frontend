import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const {
    selectedUsers,
    title,
    description,
    AVM,
    surveyProof,
    otherDocuments,
    videos,
    pictures,
    read,
  } = req.body;

  try {
    const createdAsset = await prisma.asset
      .create({
        data: {
          owners: {
            connect: selectedUsers,
          },
          title,
          description,
          AVM,
          surveyProof,
          otherDocuments,
          videos,
          pictures,
        },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Asset created", createdAsset });
  } catch (error) {
    console.log("Failure");
  }
}
