import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const {
    selectedUsers,
    title,
    description,
    floorArea,
    bedrooms,
    bathrooms,
    otherRooms,
    floorPrice,
    saleTimeframe,
    extraConditionsLabels,
    extraConditionsDescriptions,
    AVM,
    surveyProof,
    images,
    read,
  } = req.body;

  try {
    const createdAsset = await prisma.asset
      .create({
        data: {
          selectedUsers,
          title,
          description,
          floorArea,
          bedrooms,
          bathrooms,
          otherRooms,
          floorPrice,
          saleTimeframe,
          extraConditionsLabels,
          extraConditionsDescriptions,
          AVM,
          surveyProof,
          images,
        },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Asset created", createdAsset });
  } catch (error) {
    console.log("Failure");
  }
}
