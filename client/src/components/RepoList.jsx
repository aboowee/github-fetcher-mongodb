import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {
      repos.map((repo) => {
        return(
        <div key={repo.repoId}>
          <li>Name: {repo.repoName}</li>
          <li>Link to Repo: {repo.repoUrl}</li>
          <li>Created By: {repo.username}</li>
          <li>Forks: {repo.forks}</li>
        </div>
        )
      })
    }
  </div>
)

export default RepoList;