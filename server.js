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
      res.send(users);
    })
    .catch(() => {
      res.send("Was not able to bring game information.");
    })
});

app.post("/games", function(req, res) {
  var game = new VideoGame();
  console.log(req.body);
  game.title = req.body.title;
  game.description = req.body.description;
  game.img = req.body.img;

  game.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Videogame created!'});
  });
});

app.get("/games/:_id", function(req, res) {
  VideoGame.findById(req.params._id, (err, game) => {
    if(err) {
      res.send(err);
    }
    res.json(game);
  });
});

app.put("/games/:_id", function(req, res) {
  VideoGame.findById(req.params._id, (err, game) => {
    if(err){
      res.send(err);
    }
    game.title = req.body.title ? req.body.title : game.title;
    game.description = req.body.description ? req.body.description : game.description;
    game.img = req.body.img ? req.body.img : game.img;

    game.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Game updated!' });
    });
  });
});

app.delete("/games/:_id", function(req, res) {
  VideoGame.remove({
    _id: req.params._id
  }, (err, game) => {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'successfully deleted' });
  });
});
