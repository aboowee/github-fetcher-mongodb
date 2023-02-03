const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: {type: Number, unique: true, required: true},
  username: {type: String, required: true},
  repoName: {type: String, required: true},
  repoUrl: {type: String, required: true},
  description: {type: String, required: false},
  // updatedAt: Date,
  // createdAt: Date,
  forks: {type: Number, required: true}

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (dataSet) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  dataSet.forEach((currentRepo) => {
  Repo.create({repoId: currentRepo.id, username: currentRepo.owner.login, repoName: currentRepo.name, repoUrl: currentRepo.html_url, description: currentRepo.description, forks: currentRepo.forks}, (error, repo) => {
      if (error) {
        console.log('Could not save into database');
        return error;
      } console.log('User and Repo added');
    })
  })
}

module.exports.save = save;