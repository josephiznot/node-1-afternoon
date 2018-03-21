const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mc = require(__dirname + "/controllers/messages_controller");
var messagesBaseUrl = "/api/messages";

app.use(express.static(__dirname + "/../public/build"));

app.use(bodyParser.json());
app.post(`${messagesBaseUrl}`, mc.create);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);
app.get(`${messagesBaseUrl}`, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);

app.listen(port, () => {
  console.log(`I am now istening at port ${port}.`);
});
