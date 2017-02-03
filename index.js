const express  = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//const MongoClient = require("mongodb").MongoClient;
//const username = process.env.MONGO_USER;
//const password = process.env.MONGO_PW;
//const url = `mongodb://${username}:${password}@ds139949.mlab.com:39949/videogame_collection`

const mongodb = require("mongodb");
const mongoose = require("mongoose");
//const VideoGame = require("./Schemas/videoGame");
const mongoUtils = require("./mongoUtils");

const VIDEOGAME_COLLECTION = "videogames";

const app = express();
app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());

//mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/videogames');

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/games", function(req, res) {
  mongoUtils.getGames().then((games) => {
    res.json(games);
  })
  .catch(() => {
    res.send({ error: "Game information not retrieved." });
  })
});

app.post("/games", function(req, res) {
  mongoUtils.createGame(req.body).then((user) => {
    res.json({ message: "Game created."});
  })
  .catch((err) => {
    res.send(err);
  });
});

app.get("/games/:_id", function(req, res) {
  mongoUtils.findGameById(req.params._id).then((user) => {
    res.json(user);
  })
  .catch((err) => {
    res.send(err);
  });
});

app.put("/games/:_id", function(req, res) {
  mongoUtils.updateGameById(req.params._id, req.body).then(() => {
    res.json({ message: "Game updated."});
  })
  .catch((err) => {
    res.send(err);
  });
});

app.delete("/games/:_id", function(req, res) {
  mongoUtils.deleteGameById(req.params._id).then(() => {
    res.json({ message: "Game deleted."});
  })
  .catch((err) => {
    res.send(err);
  });
});
