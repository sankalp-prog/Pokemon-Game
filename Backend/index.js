import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const dict = {};
app.get("/coordinates/:id", (req, res) => {
  // let x = Math.floor(Math.random() * 100);
  // let y = Math.floor(Math.random() * 100);
  // res.json({
  //   xCoordinate: x,
  //   yCoordinate: y,
  // });

  // console.log(req.query);
  // console.log(req.query.coordinates);
  // console.log(req.params);

  dict[req.params.id] = [req.query.x, req.query.y];

  console.log(dict);

  res.send(dict);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
