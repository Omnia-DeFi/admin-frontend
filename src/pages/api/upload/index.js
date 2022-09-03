import { prisma } from "../../../prisma/prisma";

const { cloudinary } = require("../../../utils/cloudinary");

export const config = {
  api: { bodyParser: { sizeLimit: "25mb" } },
};

export default async function handler(req, res) {
  try {
    const fileString = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "omniadefi",
      resource_type: "auto",
    });
    res.status(200).json({ message: "File Uploaded", uploadedResponse });
  } catch (error) {
    console.log(error);
  }
}
