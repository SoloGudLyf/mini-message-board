import { Router } from "express";
import messages from "../index.js";
import { getMessageDetails } from "../Controller/userController.js";

const messageDetails = Router();

messageDetails.get("/", getMessageDetails);

export default messageDetails;
