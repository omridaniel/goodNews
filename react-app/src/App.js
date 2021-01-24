import './App.css';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTop from './components/NavTop';
import SmallCards from './components/SmallCards';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

///////////////API Calls///////////////////////
//User location
var user_city = 'Kingston';
var user_country = 'CA';

//Get the news articles:
async function getNews() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var response = await fetch("http://api.ipstack.com/check?access_key=5b09882b84394e914a5feaaed563c4d2", requestOptions);
  var locationResults = await response.json();
  user_country = locationResults['country_code'];
  user_city = locationResults['city'];

  var requestOptionsAylien = {
    method: 'GET',
    headers: {
      "X-AYLIEN-NewsAPI-Application-ID": "a6c0437d",
      "X-AYLIEN-NewsAPI-Application-Key": "5916768b9e8ac1f034c50e7727552db6"
    },
    redirect: 'follow'
  };

  var baseURL = "https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-30DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=";
  var inbet = "&text=";
  var finalURL = baseURL.concat(user_country, inbet, user_city);

  var responseAylien = await fetch(finalURL, requestOptionsAylien);
  var newsResults = await responseAylien.json();
  return newsResults;
}
/////////////////////////////////////////////////

function App() {
  const [articles, setArticles] = useState([]);

  function getAllArticles() {
    getNews()
      .then(results => {
        setArticles(results.stories);
        console.log(results.stories);
      })
      .catch(error => console.log('error', error));

  };

  useEffect(() => {
    getAllArticles();
  }, []);


  function randomCardStyle() {
    let random = Math.floor(Math.random() * 5) + 1;
    return "cardStyle" + random;
  }

  return (
    <div className="App">

      <NavTop
        city={user_city}
        country={user_country} />

      <p style={{paddingLeft: "20vw", paddingTop: "2vh"}}>Welcome to The Good News, below you can see positive events from the past 30 days that occured near you!</p>
      
      <hr />

      <Container fluid style={{ marginTop: "40px" }}>
        <Row>
          {/* Incorporate welcome modal and local stores here */}
        </Row>
        <Row >
          <Col md>
            <div className="card-container" style={{paddingLeft: "10vw", borderRadius: "20px" }}>
              {articles.slice(0, 5).map((data, index) => (
                <Cards key={index}
                  title={data["title"]}
                  excerpt={data["summary"]["sentences"][0]}
                  link={data["links"]["permalink"]}
                  image={data["media"][0]["url"]}
                  className={randomCardStyle()} />
              ))}
            </div>
          </Col>
          <Col md>
            <div className="card-container" style={{paddingRight: "10vw", borderRadius: "20px" }}>
              {articles.slice(6, 10).map((data, index) => (
                <Cards key={index}
                  title={data["title"]}
                  excerpt={data["summary"]["sentences"][0]}
                  link={data["links"]["permalink"]}
                  image={data["media"][0]["url"]}
                  className={randomCardStyle()} />
              ))}
            </div>
          </Col>
        </Row>

      </Container>

      <hr />

      <SmallCards />

    </div>
  )
}

export default App;
