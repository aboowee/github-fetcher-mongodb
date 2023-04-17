import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [reposUpdated, setUpdated] = useState(0);

  const search = (term) => {
    // console.log(`${term} was searched`);

    $.ajax({
      method: 'POST',
      url: '/repos',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({username: term}),
      success: (data) => {
        setUpdated(Number(data));
        receiveData();
      },
      error: (xhr, status, error) => {
        console.log('Username was not added:  ', status, error);
      }
    })
    // .done(function(result) {
    //   console.log('Username was added:  ', result);
    // })
  }

  const receiveData = () => {

    $.ajax({
      method: 'GET',
      url: '/repos',
      dataType: 'json',
      success: (data) => {
        console.log('Got Data:  ', data);
        setRepos(data);
      },
      error: (error) => {
        console.log('No data:   ', error);
      }
    })
  }

  useEffect(() => {
    console.log('Mounted');
    fetch('/repos')
    .then ((data) => (data.json()))
    .then ((values) => {setRepos(values)})
  }, []);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search}/>
      <div>{reposUpdated} new repos imported</div>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));