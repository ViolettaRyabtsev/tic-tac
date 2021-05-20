const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");

const winnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    inique: true,
  },
  dody: {
    type: String,
  },
});

const Winner = mongoose.model("winner", winnerSchema);
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/winners", async (req, res) => {
  console.log("we are getting get");
  const winners = await Winner.find({}).lean().exec();
  res.status(200).json(winners);
});

app.post("/winners", async (req, res) => {
  //req.body
  const { name, body } = req.body;
  console.log("name body", name, body);
  Winner.create({ name, body })
    .then(() => console.log("saved!"))
    .catch((err) => console.error("bunch of errors: ", err));
  res.status(201).send();
});

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect()
  .then(() =>
    app.listen(5000, () => {
      console.log("server on http://localhost:5000");
    })
  )
  .catch((e) => console.log(e));
