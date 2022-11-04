import { prisma } from "../../../prisma/prisma";
/**
 * Description: This function is used to get the asset details from the database
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns - Returns the asset details
 */
export default async function handler(req, res) {
  try {
    const results = await prisma.Asset.findMany({
      select: {
        id: true,
        userId: true,
        description: true,
        landRegistry: true,
        floorArea: true,
        hasOutdoorSpace: true,
        bedrooms: true,
        bathrooms: true,
        otherRooms: true,
        floorPrice: true,
        saleTimeframe: true,
        extraConditionsLabels: true,
        extraConditionsDescriptions: true,
        AVM: true,
        surveyProof: true,
        title: true,
        images: true,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    console.log("Error while fetching owner details: ", error);
    res.status(500).json({ message: "Unable to get assets" });
  }
}
