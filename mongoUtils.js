const MongoClient = require('mongodb').MongoClient;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PW;
const url = `mongodb://${username}:${password}@ds139949.mlab.com:39949/videogame_collection`
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

const VideoGame = require('./Schemas/videoGame');
const options = { server: { socketOptions: { keepAlive: 300000000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000000, connectTimeoutMS : 30000 } } };

mongoose.connect(url, options)
  .then(() => {
    console.log('Connected to database.');
  }).catch((err) => {
    console.log(err);
  });

exports.getGames = () =>{
  return VideoGame.find({});
}

exports.createGame = (game) => {
  let newGame = new VideoGame();
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
