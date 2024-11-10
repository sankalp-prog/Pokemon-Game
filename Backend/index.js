import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/coordinates", (req, res) => {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  res.json({
    xCoordinate: x,
    yCoordinate: y,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
