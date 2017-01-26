const express  = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const VideoGame = require("./Schemas/videoGame");
const ObjectID = mongodb.ObjectID;

const VIDEOGAME_COLLECTION = "videogames";

const app = express();
app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/videogames');

const server = app.listen(process.env.PORT || 8080, function() {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/games", function(req, res) {
  VideoGame.find({})
    .then((users) => {
      console.log("users " ,users);
      console.log("typeof users ", typeof users);
      console.log("keys", Object.keys(users));
      res.send(users);
    })
    .catch(() => {
      res.send("sorry");
    })
});
