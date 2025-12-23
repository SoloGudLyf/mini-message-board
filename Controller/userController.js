import { getAllUsernames, insertUsername, getEntity } from "../db/queries.js";

const messageForm = (req, res) => {
  res.render("sendMessagePage");
};

const postMessage = async (req, res) => {
  await insertUsername(req.body.authorName, req.body.message, new Date());
  res.redirect("/");
};

const getMessageDetails = async (req, res) => {
  const entityDetails = await getEntity(req.query.index);
  res.render("messageDetailsPage", { entityDetails: entityDetails.rows[0] });
};

const logMessages = async (req, res) => {
  const dbMessages = await getAllUsernames();

  res.render("index", { dbMessages });
};

export { messageForm, postMessage, getMessageDetails, logMessages };
