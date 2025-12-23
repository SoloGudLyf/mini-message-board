import { getAllUsernames, insertUsername } from "../db/queries.js";

const messageForm = (req, res) => {
  res.render("sendMessagePage");
};

const postMessage = async (req, res) => {
  await insertUsername(req.body.authorName, req.body.message, new Date());
  res.redirect("/");
};

const getMessageDetails = (req, res) => {
  const user = messages[Number(req.query.index)];

  res.render("messageDetailsPage", { user: user });
};

const logMessages = async (req, res) => {
  const dbMessages = await getAllUsernames();
  res.render("index", { dbMessages });
};

console.log(await getAllUsernames());

export { messageForm, postMessage, getMessageDetails, logMessages };
