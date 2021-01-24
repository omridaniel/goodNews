import logo from './logo.svg';
import './App.css';

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
  console.log(locationResults);
  user_country = locationResults['country_code'];
  user_city = locationResults['city'];

  var requestOptions = {
    method: 'GET',
    headers: {
        "X-AYLIEN-NewsAPI-Application-ID": "058d9728",
          "X-AYLIEN-NewsAPI-Application-Key": "9893863a172facf7417ad6a8d12bccce"
      },
    redirect: 'follow'
  };

  var baseURL ="https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-90DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=";
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
  var newsArticles;
  newsArticles = getNews();
  console.log(newsArticles);
  
  return (
    <div className="App">
      <header className="App-header">
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
