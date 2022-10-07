import { prisma } from "../../../prisma/prisma";
import Cors from "cors";
import Pusher from "pusher-js";

const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
  //todos: remove POST
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {

  const Pusher = require("pusher");

    const pusher = new Pusher({
      appId: "1483322",
      key: "b2c6e10ed473266b458b",
      secret: "5f842a05580230ae1197",
      cluster: "eu",
      useTLS: true
    });
  
    pusher.trigger("omnia", "new-notification", {
      message: "hello world from omnia"
    });

  await runMiddleware(req, res, cors);
  const { userId, type, title, content } = req.body;

  try {
    //Intialize NotificationBearer
    const notificationsBearer = await prisma.notificationsBearer.upsert({
      where: {
        userId: userId,
      },
      update: {},
      create: {
        userId: userId,
        bearerId: userId,
      },
    });

    //Create notification
    const notifications = await prisma.notifications.create({
      data: {
        bearerId: userId,
        type: type,
        title: title,
        content: content,
      },
    });
    prisma.$disconnect();

    res.status(200).json({
      message: "Notification Created",
      notificationsBearer,
      notifications,
    });
  } catch (error) {
    console.log(error);
    //todo: Remove console
    res.status(200).json({ error, message: "Notification Not Created" });
  }
}
