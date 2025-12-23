import { getAllUsernames } from "../db/queries.js";

const messageForm = (req, res) => {
  res.render("sendMessagePage");
};

const postMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
  });
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
