import { Router } from "express";
import messages from "../index.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("sendMessagePage");
});

newMessageRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
});

export default newMessageRouter;
