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
      });
      res.status(200).json(results);
      if (results.length) {
        console.log("result", results);
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
