import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);

    $.ajax({
      method: 'POST',
      url: '/repos',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({username: term})
    })
    .done(function(result) {
      console.log('Username was added:  ', result);
    })
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));