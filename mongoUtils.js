const mongodb = require("mongodb");
const mongoose = require("mongoose");
const VideoGame = require("./Schemas/videoGame");

mongoose.Promise = global.Promise;

exports.getGames = () =>{
  return VideoGame.find({});
}

exports.createGame = (game) => {
  let newGame = new VideoGame();
  // send req.body as argument to caller
  newGame.title = game.title;
  newGame.description = game.description;
  newGame.img = game.img;

  return newGame.save();
}

exports.findGameById = (id) => {
  return VideoGame.findById(id);
}

exports.updateGameById = (id, updatedGame) => {
  let update = VideoGame.findById(id, (err, game) => {
    if(err){
      res.send(err);
    }
    game.title = updatedGame.title ? updatedGame.title : game.title;
    game.description = updatedGame.description ? updatedGame.description : game.description;
    game.img = updatedGame.img ? updatedGame.img : game.img;

    return game.save();
  });
  return update;
}

exports.deleteGameById = (id) => {
  return VideoGame.remove({
    _id: id
  });
}
