import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/elements", (req, res) => {
  const elements = [
    {
      type: "trees",
      path: "/images/tree.png",
      coordinates: [
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
    },
    {
      type: "bushes",
      path: "images/bushes.png",
      coordinates: [
        { x: 3, y: 1 },
        { x: 5, y: 2 },
      ],
    },
  ];
  res.json(elements);
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

  // console.log(dict);

  res.send(dict);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
