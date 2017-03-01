const express  = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const mongoUtils = require('./mongoUtils');

const app = express();
app.use(express.static(__dirname + '/build'));
app.use(favicon(__dirname + '/icons/mario.ico'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.on('error', console.error.bind(console, 'connection error:'));

app.use(router);

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
  console.log('App now running on port', port);
});

router.route('/games')
  .get(function(req, res) {
    mongoUtils.getGames().then((games) => {
      res.json(games);
    })
    .catch(() => {
      res.send({ error: 'Game information not retrieved.' });
    })
  })
  .post(function(req, res) {
    mongoUtils.createGame(req.body).then((user) => {
      res.json({ message: 'Game created.'});
    })
    .catch((err) => {
      res.send(err);
    });
  });

router.route('/games/:_id')
  .get(function(req, res) {
    mongoUtils.findGameById(req.params._id).then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.send(err);
    });
  })
  .put(function(req, res) {
    mongoUtils.updateGameById(req.params._id, req.body).then(() => {
      res.json({ message: 'Game updated.'});
    })
    .catch((err) => {
      res.send(err);
    });
  })
  .delete(function(req, res) {
    mongoUtils.deleteGameById(req.params._id).then(() => {
      res.json({ message: 'Game deleted.'});
    })
    .catch((err) => {
      res.send(err);
    });
  });

router.route('*')
  .get(function (req, res) {
    res.redirect('/');
  });
