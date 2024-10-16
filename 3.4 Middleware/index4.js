import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var bandname = "";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  bandname = "" + req.body['First'] + req.body['Second']
  console.log(bandname);
  res.send(`<h1>Your band name is:</h1><h2>${bandname}✌️</h2>`);
})