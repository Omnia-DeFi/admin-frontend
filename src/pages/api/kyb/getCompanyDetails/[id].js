import { prisma } from "../../../../prisma/prisma";
/**
 * Description: This function is used to get the asset details from the database
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns - Returns the asset details
 */
export default async function handler(req, res) {
  const userId = req.query.id;
  try {
    if (userId) {
      const results = await prisma.kyc.findMany({
        where: {
          userId: userId,
          type: "KYB",
        },
        select: {
          id: true,
          supportiveData: true,
          status: true,
        },
        orderBy: {
          approvedAt: "desc",
        },
        skip: 0,
        take: 1,
      });
      let userIds = [];
      let identifiedUsers = [];
      if (results.length) {
        userIds = await prisma.kyc.findRaw({
          filter: {
            "supportiveData.registrationNumber":
              results[0].supportiveData.registrationNumber,
            "supportiveData.jurisdiction":
              results[0].supportiveData.jurisdiction,
            "supportiveData.name": results[0].supportiveData.name,
          },
          options: { projection: { _id: true } },
        });
        if (userIds.length) {
          userIds = userIds.map((item) => item._id["$oid"]);
          identifiedUsers = await prisma.user.findMany({
            where: {
              id: {
                in: userIds,
              },
            },
            select: {
              email: true,
              issuer: true,
            },
          });
        }
        results.identifiedUsers = identifiedUsers;
        res.status(200).json({ ...results[0], identifiedUsers });
      } else {
        res.status(404).json({ message: "User ID not found or Incorrect" });
      }
    } else {
      console.log("Error while fetching owner details: ", error);
      res.status(404).json({ message: "User ID not found or Incorrect" });
    }
  } catch (error) {
    console.log("Error while fetching owner details: ", error);
    res.status(500).json({ message: "Unable to get details" });
  }
}
