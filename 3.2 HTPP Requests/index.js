import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) =>
{
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) =>
    {
        res.send("<h1>Contact Me</h1> <p> 07387654465 </p>");
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});