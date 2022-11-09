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
    // hasOutdoorSpace,
    landRegistry,
    AVM,
    surveyProof,
    images,
    // read,
  } = req.body;

  try {
    console.log("selectedUsers", selectedUsers[0]["id"]);
    const createdAsset = await prisma.asset
      .create({
        data: {
          userId: selectedUsers[0]["id"],
          title,
          description,
          floorArea,
          bedrooms: +bedrooms,
          bathrooms: +bathrooms,
          otherRooms: +otherRooms,
          floorPrice: +floorPrice,
          saleTimeframe: +saleTimeframe,
          extraConditionsLabels,
          extraConditionsDescriptions,
          // hasOutdoorSpace,
          landRegistry,
          AVM,
          surveyProof,
          images,
        },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Asset created", createdAsset });
    console.log("createdAsset", createdAsset);
  } catch (error) {
    console.log("Failure");
  }
}
