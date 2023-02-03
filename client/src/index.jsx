import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {
  const [repos, setRepos] = useState([]);

  const search = (term) => {
    // console.log(`${term} was searched`);

    $.ajax({
      method: 'POST',
      url: '/repos',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({username: term}),
      success: () => {
        console.log('Username was added');
        receiveData();
      },
      error: () => {
        console.log('Username was not added');
        receiveData();
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
    console.log('test');
    fetch('/repos')
    .then ((data) => (data.json()))
    .then ((values) => {setRepos(values)})
  }, []);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));