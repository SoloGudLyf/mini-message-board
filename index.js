import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import newMessageRouter from "./routes/newMessageRouter.js";
import messageDetails from "./routes/messageDetails.js";
import { logMessages } from "./Controller/userController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.use(express.urlencoded({ extended: true }));

app.get("/", logMessages);

app.use("/new", newMessageRouter);
app.use("/messageDetails", messageDetails);

app.listen(8080, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server started on port 8080");
});

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

export default messages;
