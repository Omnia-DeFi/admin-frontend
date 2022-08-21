import { prisma } from "../../../prisma/prisma";

const {cloudinary} = require("../../../utils/cloudinary");

export default async function handler(req, res) {
  try{
    const fileString = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: 'omniadefi'
    });
    res.status(200).json({ message: "Image Uploaded", uploadedResponse });
  } catch(error){
    console.log(error);
  }
}

