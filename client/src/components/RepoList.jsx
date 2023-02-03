import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {
      repos.map((repo) => {
        return(
        <div key={repo.repoId} class='repo'>
          <ul id='title'>{repo.repoName.toUpperCase()}</ul>
          <ul>Link to Repo: <a href={repo.repoUrl}>{repo.repoUrl}</a></ul>
          <ul>Created By: {repo.username.toUpperCase()}</ul>
          <ul>Forks: {repo.forks}</ul>
        </div>
        )
      })
    }
  </div>
)

export default RepoList;