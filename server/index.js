const express = require('express');
const {getReposByUsername: getReposByUsername} = require('../helpers/github');
const {find: find} = require('../database/index')
const {save: save} = require('../database/index');
const Promise = require('bluebird');

let app = express();
Promise.promisify(save);


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log(req.body);

  getReposByUsername(req.body.username)
  .then((data) => {
    if (data.data) {
      return save(data.data);
    } else {
      throw data;
    }
  })
  .then ((savedData) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    res.sendStatus(404);
  })

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  find()
  .then((repos) => {
    if (repos) {
      res.send(repos);
    } else {
      throw repos;
    }
   })
   .catch((error) => {
    res.status(500).send('No users have been added');
   })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

