//User location
var user_city = 'Kingston';
var user_country = 'CA';
var user_language = 'en';

//Get location info:
var location_results = {};
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://api.ipstack.com/check?access_key=5b09882b84394e914a5feaaed563c4d2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result['ip']))
  .catch(error => console.log('error', error));


var requestOptions = {
  method: 'GET',
  headers: {
      "X-AYLIEN-NewsAPI-Application-ID": "058d9728",
        "X-AYLIEN-NewsAPI-Application-Key": "9893863a172facf7417ad6a8d12bccce"
    },
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-90DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=CA&text=Kingston", requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => console.log('error', error));