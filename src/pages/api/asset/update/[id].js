import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const assetId = req.query.id;
  const {
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
    AVM,
    surveyProof,
    landRegistry,
    images,
  } = req.body;

  try {
    let updatedAsset;
    if (req.method === "PUT") {
      updatedAsset = await prisma.Asset.update({
        where: {
          id: assetId,
        },
        data: {
          title,
          description,
          floorArea,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          otherRooms: otherRooms,
          floorPrice: floorPrice,
          saleTimeframe: saleTimeframe,
          extraConditionsLabels,
          extraConditionsDescriptions,
          hasOutdoorSpace: hasOutdoorSpace === "true" ? true : false,
          AVM,
          surveyProof,
          landRegistry,
          images,
        },
      })
        .catch(console.error)
        .finally(() => prisma.$disconnect());
    }

    res.status(200).json(updatedAsset, { message: "Updated Asset" });
  } catch (error) {
    console.log("Update failure");
  }
}
