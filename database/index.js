const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: {type: Number, unique: true, required: true},
  username: {type: String, required: true},
  repoName: {type: String, required: true},
  repoUrl: {type: String, required: true},
  description: {type: String, required: true},
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

    let dataToAdd = new Repo({_id: currentRepo.id, username: currentRepo.owner.login, repoName: currentRepo.name, repoUrl: currentRepo.html_url, description: currentRepo.description, forks: currentRepo.forks})

    dataToAdd.save((error) => {
      if (error) {
        console.log('Ran into error');
        return error;
      }
    })
  })
}

module.exports.save = save;