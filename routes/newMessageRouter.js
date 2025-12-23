import { Router } from "express";
import messages from "../index.js";
import { messageForm, postMessage } from "../Controller/userController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", messageForm);

newMessageRouter.post("/", postMessage);

export default newMessageRouter;
