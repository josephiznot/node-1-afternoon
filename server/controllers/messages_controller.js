var messages = [];
var id = 0;
module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { text } = req.body;
    const reqId = req.params.id;
    const targetId = messages.findIndex(message => (message.id = reqId));
    messages[targetId] = {
      text: text || messages.text
    };
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    var deleteId = req.params.id;
    targetId = messages.findIndex(message => message === deleteId);
    messages.splice(targetId, 1);
    res.status(200).send(messages);
  }
};
