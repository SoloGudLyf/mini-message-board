import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const app = express();



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/new", (req, res) => {});

app.listen(8080, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server started on port 8080");
});

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
