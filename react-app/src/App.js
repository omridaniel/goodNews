import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

//import apicall from './components/api-call';

///////////////API Calls///////////////////////
//User location
var user_city = 'Kingston';
var user_country = 'CA';

//Get location info:
// async function getLocation(){
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   var response = await fetch("http://api.ipstack.com/check?access_key=5b09882b84394e914a5feaaed563c4d2", requestOptions);
//   var locationResults = await response.json();
//   console.log(locationResults);
//   return locationResults;
//     // .then(response => response.json())
//     // .then(result => {
//     //   user_city = result['city'];
//     //   user_country = result['country_code'];
//     // })
//     // .catch(error => console.log('error', error));
// }

//Get the news articles:
async function getNews(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var response = await fetch("http://api.ipstack.com/check?access_key=5b09882b84394e914a5feaaed563c4d2", requestOptions);
  var locationResults = await response.json();
  user_country = locationResults['country_code'];
  user_city = locationResults['city'];

  var requestOptions = {
    method: 'GET',
    headers: {
        "X-AYLIEN-NewsAPI-Application-ID": "a6c0437d",
          "X-AYLIEN-NewsAPI-Application-Key": "5916768b9e8ac1f034c50e7727552db6"
      },
    redirect: 'follow'
  };

  var baseURL ="https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-2DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=";
  var inbet = "&text=";
  var finalURL = baseURL.concat(user_country, inbet, user_city);

  var response = await fetch(finalURL, requestOptions);
  var newsResults = await response.json();
  return newsResults;
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}
/////////////////////////////////////////////////


function App() {
  const [articles, setArticles] = useState({});

  function getAllArticles(){
    getNews()
    .then(results => {
      setArticles(results);
    })
    .catch(error => console.log('error', error));
      console.log({articles});
  };
  
  useEffect(()=> {
    getAllArticles();
  },[]);

  //console.log(newsArticles);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getAllArticles()}>Reset</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
