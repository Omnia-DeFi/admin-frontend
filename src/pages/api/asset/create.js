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
    hasOutdoorSpace,
    landRegistry,
    AVM,
    surveyProof,
    images,
    // read,
  } = req.body;
  try {
    const data = [];
    for (let i = 0; i < selectedUsers.length; i++) {
      data.push({
        userId: selectedUsers[i]["id"],
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
        hasOutdoorSpace: hasOutdoorSpace === "True" ? true : false,
        landRegistry,
        AVM,
        surveyProof,
        images,
      });
    }
    const createdAsset = await prisma.Asset.createMany({
      data: data,
    })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json({ message: "Asset created", createdAsset });
  } catch (error) {
    console.log("Failure");
  }
}
