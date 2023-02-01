const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  username: String,
  repoName: String,
  repoUrl: String,
  //numberOfForks: Number  IF ORDERING BY NUMBER
  updatedAt: Date,
  //If NOT updated, use created?
  createdAt: Date,
  starGazerCount: Number



});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;