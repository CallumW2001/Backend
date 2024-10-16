import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var submit = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  submit = true;
  var letters = 0;
  var length = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    nameLength: length,
    submit:submit
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
