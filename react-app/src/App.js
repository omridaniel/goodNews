import './App.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Banner from './components/Banner';

///////////////API Calls///////////////////////
//User location
var user_city = 'Kingston';
var user_country = 'CA';

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

  var baseURL ="https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-30DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=";
  var inbet = "&text=";
  var finalURL = baseURL.concat(user_country, inbet, user_city);

  var response = await fetch(finalURL, requestOptions);
  var newsResults = await response.json();
  return newsResults;
}
/////////////////////////////////////////////////

function App() {
  const [articles, setArticles] = useState([]);
  
  function getAllArticles(){
    getNews()
    .then(results => {
      setArticles(results.stories);
      console.log(results.stories);
    })
    .catch(error => console.log('error', error));
      
  };
  
  useEffect(()=> {
    getAllArticles();
  },[]);
  
  return (
    <div className="App">  
      <Banner 
      city={user_city}
      country={user_country}/>
      <div className="card-container">
        {articles.map((data, index) => (
            <Cards key={index}
            title={data["title"]}
            excerpt={data["summary"]["sentences"][0]}
            link={data["links"]["permalink"]}
            image={data["media"][0]["url"]} />
          ))}
    </div>  
  </div>
  )}

export default App;
