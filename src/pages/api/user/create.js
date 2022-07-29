import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
  const { issuer, email, phoneNumber, publicAddress } = req.body;

  try {
    const createdUser = await prisma.user
      .create({
        data: {
          issuer,
          email,
          phone_number: +phoneNumber,
          public_address: publicAddress,
        },
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json(createdUser, { message: "User Created" });
  } catch (error) {
    console.log("Failure");
  }
}
