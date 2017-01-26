const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoGameSchema = new Schema({
  title: String,
  description: String,
  img: String,
});

const VideoGame = mongoose.model('videoGame', VideoGameSchema);

module.exports = VideoGame;
