import { prisma } from "../../../../prisma/prisma";
/**
 * Description: This function is used to get the asset details from the database
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns - Returns the asset details
 */
export default async function handler(req, res) {
  try {
    const results = await prisma.Asset.aggregateRaw({
      pipeline: [
        {
          $lookup: {
            from: "User",
            localField: "userId",
            foreignField: "_id",
            as: "userData",
          },
        },
        {
          $project: {
            id: 1,
            userId: 1,
            description: 1,
            landRegistry: 1,
            floorArea: 1,
            hasOutdoorSpace: 1,
            bedrooms: 1,
            bathrooms: 1,
            otherRooms: 1,
            floorPrice: 1,
            saleTimeframe: 1,
            extraConditionsLabels: 1,
            extraConditionsDescriptions: 1,
            AVM: 1,
            surveyProof: 1,
            title: 1,
            images: 1,
            "userData.email": 1,
          },
        },
      ],
    });

    const filteredData = results.map((item) => {
      item.email =
        item.userData && item.userData.length && item.userData[0].email
          ? item.userData[0].email
          : "";
      item.userId = item.userId["$oid"];
      item._id = item._id["$oid"];
      item.images = item.images ? item.images : [];
      delete item.userData;
      return item;
    });
    res.status(200).json(filteredData);
  } catch (error) {
    console.log("Error while fetching assets: ", error);
    res.status(500).json({ message: "Unable to get assets" });
  }
}
