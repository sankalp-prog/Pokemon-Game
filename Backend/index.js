import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  res.render("index.ejs", {
    xCoordinate: x,
    yCoordinate: y,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
