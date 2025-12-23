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

export {
  messageForm,
  postMessage,
  getMessageDetails,
};
