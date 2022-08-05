import { prisma } from "../../../prisma/prisma";
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { issuer, email, phoneNumber, publicAddress } = req.body;

  try {
    const createdUser = await prisma.user
      .upsert({
        where: {
          email
        },
        update: {},
        create: {
            issuer,
            email,
            phone_number: +phoneNumber,
            public_address: publicAddress,
        }
      })
      .catch(console.error)
      .finally(() => prisma.$disconnect());
    res.status(200).json(createdUser, { message: "User Created" });
  } catch (error) {
    console.log("Failure");
  }
}
