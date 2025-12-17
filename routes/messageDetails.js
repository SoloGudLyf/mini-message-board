import { Router } from "express";
import messages from "../index.js";

const messageDetails = Router();

messageDetails.get("/", (req, res) => {
  const user = messages[Number(req.query.index)];

  res.render("messageDetailsPage", { user: user });
});

export default messageDetails;
