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

  var baseURL ="https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories?published_at.start=NOW-2DAYS&published_at.end=NOW&sentiment.title.polarity=positive&sentiment.body.polarity=positive&media.images.count.min=1&language[]=en&source.locations.country[]=";
  var inbet = "&text=";
  var finalURL = baseURL.concat(user_country, inbet, user_city);

  var response = await fetch(finalURL, requestOptions);
  var newsResults = await response.json();
  return newsResults;
}
/////////////////////////////////////////////////


function App() {
  const [articles, setArticles] = useState();
  
  function getAllArticles(){
    getNews()
    .then(results => {
      setArticles(results);
      console.log(results.stories);
    })
    .catch(error => console.log('error', error));
      
  };
  
  useEffect(()=> {
    getAllArticles();
  },[]);

  const another = {
    "next_page_cursor": "MTYxMTMxNjk1MjAwMCwzMTgxODA4Mjg0",
    "stories": [
        {
            "author": {
                "id": 3136111,
                "name": ""
            },
            "body": "If you aren't familiar with Joe's M.I.L.L., the library was established in 1999 in memory of Joe Chithalen, a well-known Kingston musician who tragically passed away while touring. Basically, we are like any other library, except we lend musical instruments, free of charge. We have over 1,000 instruments in our inventory and, at any given time, about half of these are out being enjoyed by our borrowers. In 2019, we completed over 7,000 loans to people in Kingston and the surrounding area! And then came 2020 and COVID-19. The library was closed from mid-March to mid-July. We reopened from late July to late December, but we are now closed again until the latest provincial lockdown order is lifted. Joe's M.I.L.L. is one of the partners supporting Sistema Kingston , a fantastic program that has space for 40 at-risk children in a string ensemble hosted at Molly Brant Elementary School. Happily, programming has been adapted this year to meet the needs of families, while operating safely within Public Health guidelines. One of the perks of my job, besides working in a place full of cool instruments, is hearing from borrowers about how much they appreciate being able to borrow an instrument for free. This is especially true during the pandemic. I have heard from many borrowers, especially parents, who are so grateful to have an instrument while they are stuck at home. I was happy to see a bit of a rush on borrowing instruments, just prior to the holidays. Like many other charitable organizations, Joe's M.I.L.L. is feeling the financial effects of the COVID-19 pandemic. We were able to apply for government relief under COVID-19 provisions, which helped cover some costs. However, registrations and incidental income are greatly reduced. Donations to Joe's M.I.L.L. can be made directly via www.joesmill.org . We are very appreciative of the generous support from our community that has kept Joe's M.I.L.L. open for over 20 years. Have you ever thought about learning a musical instrument and experiencing the joy of playing music? Joe's M.I.L.L. has a huge variety of instruments available including guitars, keyboards, drums, percussion and many other instruments from around the world. Our friendly and knowledgeable librarians can help you find the right instrument for your musical journey! Joe's M.I.L.L. is closed now until at least Thursday, Feb. 11, 2020. For reopening details, visit our website, www.joesmill.org or our Facebook and Twitter pages. Written by Tim Aylesworth, Library Coordinator with Joe's M.I.L.L. …Can we take two minutes of your time? More Kingstonians than ever are relying on Kingstonist for their local news. But we need your help to keep it going. A few years ago, two big media conglomerates, Torstar and Postmedia, “swapped assets” and promptly shuttered one of Kingston's main newspapers. We saw talented journalists displaced and years of recorded Kingston history destroyed by a decision made in another city, with interests not grounded in what was best for the Kingston community. And we resolved that we would not permit that to happen again. That's when we decided to take the Kingstonist, at that time a popular Kingston community blog, and reimagine it as the dedicated, independent local news provider you see now. Today, businesses everywhere are struggling under the burdens of COVID-19, and we are no different. So we're asking you to support us. Help us in our mission to: hold our local governments accountable; provide voices for those fighting against social injustice; fight against misinformation; and provide news not censored by the influence of corporate bias. We believe that access to news is an integral component of a healthy community. If you believe the same click here to subscribe to Kingstonist.",
            "categories": [
                {
                    "confident": false,
                    "id": "IAB1-1",
                    "label": "Books & Literature",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB1",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB1-1"
                    },
                    "score": 0.25,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": false,
                    "id": "IAB6-6",
                    "label": "Parenting teens",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB6",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB6-6"
                    },
                    "score": 0.20000000298023224,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": false,
                    "id": "IAB6",
                    "label": "Family & Parenting",
                    "level": 1,
                    "links": {
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB6"
                    },
                    "score": 0.05999999865889549,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": false,
                    "id": "IAB1",
                    "label": "Arts & Entertainment",
                    "level": 1,
                    "links": {
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB1"
                    },
                    "score": 0.05999999865889549,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": false,
                    "id": "01009000",
                    "label": "library and museum",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/01000000",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/01009000"
                    },
                    "score": 0.05000000074505806,
                    "taxonomy": "iptc-subjectcode"
                }
            ],
            "characters_count": 3780,
            "clusters": [
                167967315
            ],
            "entities": {
                "body": [
                    {
                        "indices": [
                            [
                                2146,
                                2155
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Percussion_instrument"
                        },
                        "text": "percussion",
                        "types": [
                            "Agent",
                            "PersonFunction",
                            "Instrument"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                863,
                                873
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Molly_Brant"
                        },
                        "text": "Molly Brant",
                        "types": [
                            "Agent",
                            "Woman",
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1988,
                                2005
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Musical_instrument"
                        },
                        "text": "musical instrument",
                        "types": [
                            "Agent",
                            "PersonFunction",
                            "Instrument"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                3523,
                                3538
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Social_justice"
                        },
                        "text": "social injustice",
                        "types": [
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                121,
                                128
                            ],
                            [
                                459,
                                466
                            ],
                            [
                                762,
                                769
                            ],
                            [
                                2816,
                                2823
                            ],
                            [
                                2904,
                                2911
                            ],
                            [
                                3020,
                                3027
                            ],
                            [
                                3174,
                                3181
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Kingston,_Ontario"
                        },
                        "text": "Kingston",
                        "types": [
                            "City",
                            "Location",
                            "Place",
                            "PopulatedPlace",
                            "Settlement"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2462,
                                2468
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Twitter"
                        },
                        "text": "Twitter",
                        "types": [
                            "Company",
                            "Organisation",
                            "Work",
                            "Product",
                            "Agent",
                            "Website",
                            "Service",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                3621,
                                3634
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Corporatism"
                        },
                        "text": "corporate bias",
                        "types": [
                            "Organisation",
                            "Organization"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2449,
                                2456
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Facebook"
                        },
                        "text": "Facebook",
                        "types": [
                            "Company",
                            "Organisation",
                            "Agent",
                            "Corporation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2139,
                                2143
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Drum_kit"
                        },
                        "text": "drums",
                        "types": [
                            "MusicalArtist",
                            "Collection",
                            "Book",
                            "Product"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2746,
                                2752
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Torstar"
                        },
                        "text": "Torstar",
                        "types": [
                            "Company",
                            "Organisation",
                            "Agent",
                            "Media"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2731,
                                2743
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Conglomerate_(geology)"
                        },
                        "text": "conglomerates",
                        "types": [
                            "Rock",
                            "Band"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                83,
                                88
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Memory"
                        },
                        "text": "memory",
                        "types": [
                            "Process",
                            "Election"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2758,
                                2766
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Postmedia_Network"
                        },
                        "text": "Postmedia",
                        "types": [
                            "Company",
                            "Organisation",
                            "Agent",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                679,
                                686
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Lockdown"
                        },
                        "text": "lockdown",
                        "types": [
                            "Book",
                            "Product",
                            "Definitions"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1247,
                                1254
                            ],
                            [
                                1578,
                                1585
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Pandemic"
                        },
                        "text": "pandemic",
                        "types": [
                            "Arachnid",
                            "Epidemic"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                517,
                                524
                            ],
                            [
                                1569,
                                1576
                            ],
                            [
                                1638,
                                1645
                            ],
                            [
                                3344,
                                3351
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Coronavirus_disease_2019"
                        },
                        "text": "COVID-19",
                        "types": [
                            "Person",
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2128,
                                2136
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Keyboard_instrument"
                        },
                        "text": "keyboards",
                        "types": [
                            "Agent",
                            "MusicalArtist",
                            "Instrument"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                34,
                                40
                            ],
                            [
                                711,
                                717
                            ],
                            [
                                1520,
                                1526
                            ],
                            [
                                1775,
                                1781
                            ],
                            [
                                1916,
                                1922
                            ],
                            [
                                2056,
                                2062
                            ],
                            [
                                2320,
                                2326
                            ],
                            [
                                2535,
                                2541
                            ]
                        ],
                        "text": "M.I.L.L",
                        "types": [
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                28,
                                30
                            ],
                            [
                                93,
                                95
                            ],
                            [
                                705,
                                707
                            ],
                            [
                                1514,
                                1516
                            ],
                            [
                                1769,
                                1771
                            ],
                            [
                                1910,
                                1912
                            ],
                            [
                                2050,
                                2052
                            ],
                            [
                                2314,
                                2316
                            ],
                            [
                                2529,
                                2531
                            ]
                        ],
                        "text": "Joe",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                93,
                                105
                            ]
                        ],
                        "text": "Joe Chithalen",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                754,
                                769
                            ]
                        ],
                        "text": "Sistema Kingston",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2488,
                                2501
                            ]
                        ],
                        "text": "Tim Aylesworth",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2626,
                                2636
                            ],
                            [
                                3138,
                                3148
                            ],
                            [
                                3768,
                                3778
                            ]
                        ],
                        "text": "Kingstonist",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                863,
                                891
                            ]
                        ],
                        "text": "Molly Brant Elementary School",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1003,
                                1015
                            ]
                        ],
                        "text": "Public Health",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2504,
                                2522
                            ]
                        ],
                        "text": "Library Coordinator",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    }
                ],
                "title": [
                    {
                        "indices": [
                            [
                                14,
                                20
                            ]
                        ],
                        "text": "M.I.L.L",
                        "types": [
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                8,
                                10
                            ]
                        ],
                        "text": "Joe",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    }
                ]
            },
            "hashtags": [
                "#KingstonOntario",
                "#Lockdown",
                "#Pandemic",
                "#Memory",
                "#MollyBrant",
                "#MusicalInstrument",
                "#KeyboardInstrument",
                "#DrumKit",
                "#PercussionInstrument",
                "#Facebook",
                "#Twitter",
                "#Conglomerate",
                "#Torstar",
                "#PostmediaNetwork",
                "#SocialJustice",
                "#Corporatism",
                "#Integral"
            ],
            "id": 3182153308,
            "keywords": [
                "borrowers",
                "happy",
                "M.I.L.L.",
                "instruments",
                "Letter",
                "lockdown",
                "Kingston community",
                "borrowing instruments",
                "local news",
                "Kingston",
                "year",
                "news",
                "COVID-19",
                "library",
                "local",
                "community",
                "program",
                "www.joesmill.org",
                "time",
                "musical",
                "Kingstonist",
                "government",
                "percussion",
                "Molly Brant",
                "musical instrument",
                "social injustice",
                "Twitter",
                "corporate bias",
                "Facebook",
                "drums",
                "Torstar",
                "conglomerates",
                "integral",
                "memory",
                "Postmedia",
                "pandemic",
                "keyboards"
            ],
            "language": "en",
            "links": {
                "permalink": "https://www.kingstonist.com/culture/music-arts-culture/letter-joes-m-i-l-l-borrowers-happy-to-have-instruments-during-lockdown/",
                "related_stories": "/related_stories?story_id=3182153308",
                "clusters": "/stories?clusters[]=167967315"
            },
            "media": [
                {
                    "content_length": 605968,
                    "format": "JPEG",
                    "height": 1440,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2021/01/Joes-MILL-scaled.jpg",
                    "width": 2560
                },
                {
                    "content_length": 102506,
                    "format": "JPEG",
                    "height": 180,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2019/09/Cris-Vilela-Kingstonist-ad.jpg",
                    "width": 728
                },
                {
                    "content_length": 43941,
                    "format": "JPEG",
                    "height": 180,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2019/12/Bill-Stevenson-new-banner-1.jpg",
                    "width": 728
                },
                {
                    "content_length": 36252,
                    "format": "JPEG",
                    "height": 90,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2020/03/taylor_automall_air_miles_kingstonist_leaderboard_728x90_rev1a-mar25-2020.jpg",
                    "width": 728
                }
            ],
            "paragraphs_count": 1,
            "published_at": "2021-01-22T18:08:48Z",
            "sentences_count": 35,
            "sentiment": {
                "body": {
                    "polarity": "positive",
                    "score": 0.988339
                },
                "title": {
                    "polarity": "positive",
                    "score": 0.928382
                }
            },
            "social_shares_count": {
                "facebook": [],
                "google_plus": [],
                "linkedin": [],
                "reddit": [
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T18:08:48Z"
                    }
                ]
            },
            "source": {
                "domain": "kingstonist.com",
                "home_page_url": "https://www.kingstonist.com/",
                "id": 156582,
                "locations": [
                    {
                        "country": "CA"
                    }
                ],
                "logo_url": "",
                "name": "Kingstonist",
                "rankings": {
                    "alexa": [
                        {
                            "fetched_at": "2020-11-13T02:15:40.397912461Z",
                            "rank": 320054
                        },
                        {
                            "country": "CA",
                            "fetched_at": "2020-11-13T02:15:40.397912461Z",
                            "rank": 8255
                        }
                    ]
                },
                "scopes": []
            },
            "summary": {
                "sentences": [
                    "If you aren't familiar with Joe's M.I.L.L., the library was established in 1999 in memory of Joe Chithalen, a well-known Kingston musician who tragically passed away while touring.",
                    "Like many other charitable organizations, Joe's M.I.L.L. is feeling the financial effects of the COVID-19 pandemic.",
                    "We are very appreciative of the generous support from our community that has kept Joe's M.I.L.L. open for over 20 years.",
                    "Joe's M.I.L.L. has a huge variety of instruments available including guitars, keyboards, drums, percussion and many other instruments from around the world.",
                    "That's when we decided to take the Kingstonist, at that time a popular Kingston community blog, and reimagine it as the dedicated, independent local news provider you see now."
                ]
            },
            "title": "Letter: Joe's M.I.L.L. borrowers happy to have instruments during lockdown",
            "words_count": 659,
            "license_type": 0
        },
        {
            "author": {
                "id": 3837333,
                "name": "Jessica Foley"
            },
            "body": "Participate virtually by using the #LoveYourselfActually hashtag on social media to share your feel good moments of self-care and relaxation. Staying self-isolated through our second lockdown while heading into February can make it difficult to stay positive and stress levels may be on the rise, according to a release from the YMCA, dated Friday, Jan. 22, 2021. The YMCA says it's time for you to give yourself a big hug by doing something you love with their Love Yourself, Actually challenge. The Y is known for fitness, but activities needn't be. What do you do that makes you feel good? Curl up with a good book? Sweat to the oldies? Gab with friends? Learn something new? According to the release, the YMCA is challenging individuals and groups to do something that makes them happy and submit photos or videos of these activities to create a community hub of fun. “We are hoping to encourage people to do something they enjoy to lift everyone's spirits during a difficult time,” said Rob Adams, CEO, YMCA of Eastern Ontario. “Social connection helps improve mental wellness and our challenge is focused on creating a place where people can feel like they are part of something positive.” Whether you are doing something on your own, are creating a virtual group, or doing something with those in your household, the YMCA encourages you to be good to yourself by doing your favourite thing, or learning a new favourite thing. Help the Y create a virtual community of exercisers, readers, crafters, knitters, writers, whatever-ers by sharing what you're up to during February, the YMCA said in the release. “Feeling connected is so important and it's so easy to lose that feeling when we're not socializing. That's why we wanted to create something that would reduce barriers for participation,” said Adams. “There is no cost to join in and we aren't trying to raise money. Participants don't have to be members of the Y. This is something that we hope everyone will enjoy.” Register to let the Y know what you will be doing to #LoveYourselfActually in February, then share photos or videos (using #LoveYourselfActually and tagging the YMCA of Eastern Ontario) through Facebook, Twitter or Instagram. The Y says they will create photo albums and share activities with others so everyone can be part of a great beehive of positivity. According to the release, there will also be draws for prizes so be sure to use #LoveYourselfActually and tag the YMCA of Eastern Ontario in all social posts. The event runs from Monday, Feb. 8 to Sunday, Feb. 28, 2021, inclusive. There is no cost to participate. For more information or to register, please visit: https://eo.ymca.ca/love-yourself …Can we take two minutes of your time? More Kingstonians than ever are relying on Kingstonist for their local news. But we need your help to keep it going. A few years ago, two big media conglomerates, Torstar and Postmedia, “swapped assets” and promptly shuttered one of Kingston's main newspapers. We saw talented journalists displaced and years of recorded Kingston history destroyed by a decision made in another city, with interests not grounded in what was best for the Kingston community. And we resolved that we would not permit that to happen again. That's when we decided to take the Kingstonist, at that time a popular Kingston community blog, and reimagine it as the dedicated, independent local news provider you see now. Today, businesses everywhere are struggling under the burdens of COVID-19, and we are no different. So we're asking you to support us. Help us in our mission to: hold our local governments accountable; provide voices for those fighting against social injustice; fight against misinformation; and provide news not censored by the influence of corporate bias. We believe that access to news is an integral component of a healthy community. If you believe the same click here to subscribe to Kingstonist.",
            "categories": [
                {
                    "confident": false,
                    "id": "IAB14-1",
                    "label": "Dating",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB14",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB14-1"
                    },
                    "score": 0.18000000715255737,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": true,
                    "id": "IAB14",
                    "label": "Society",
                    "level": 1,
                    "links": {
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB14"
                    },
                    "score": 0.09000000357627869,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": false,
                    "id": "14002000",
                    "label": "charity",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/14000000",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/14002000"
                    },
                    "score": 0.03999999910593033,
                    "taxonomy": "iptc-subjectcode"
                }
            ],
            "characters_count": 3923,
            "clusters": [
                167912670
            ],
            "entities": {
                "body": [
                    {
                        "indices": [
                            [
                                1453,
                                1469
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Virtual_community"
                        },
                        "text": "virtual community",
                        "types": [
                            "Language",
                            "Broadcaster",
                            "Network"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1003,
                                1005
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Chief_executive_officer"
                        },
                        "text": "CEO",
                        "types": [
                            "PersonFunction"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                329,
                                332
                            ],
                            [
                                368,
                                371
                            ],
                            [
                                709,
                                712
                            ],
                            [
                                1008,
                                1011
                            ],
                            [
                                1324,
                                1327
                            ],
                            [
                                1587,
                                1590
                            ],
                            [
                                2142,
                                2145
                            ],
                            [
                                2453,
                                2456
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/YMCA"
                        },
                        "text": "YMCA",
                        "types": [
                            "University",
                            "Organisation",
                            "Organization",
                            "Agent",
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                3666,
                                3681
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Social_justice"
                        },
                        "text": "social injustice",
                        "types": [
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2959,
                                2966
                            ],
                            [
                                3047,
                                3054
                            ],
                            [
                                3163,
                                3170
                            ],
                            [
                                3317,
                                3324
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Kingston,_Ontario"
                        },
                        "text": "Kingston",
                        "types": [
                            "Place",
                            "Settlement",
                            "Location",
                            "City",
                            "PopulatedPlace"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2316,
                                2322
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Beehive"
                        },
                        "text": "beehive",
                        "types": [
                            "Building",
                            "Structure"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2185,
                                2191
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Twitter"
                        },
                        "text": "Twitter",
                        "types": [
                            "Work",
                            "Product",
                            "Organisation",
                            "Company",
                            "Service",
                            "Website",
                            "Agent",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                3764,
                                3777
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Corporatism"
                        },
                        "text": "corporate bias",
                        "types": [
                            "Organization",
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2175,
                                2182
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Facebook"
                        },
                        "text": "Facebook",
                        "types": [
                            "Organisation",
                            "Company",
                            "Corporation",
                            "Agent"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2196,
                                2204
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Instagram"
                        },
                        "text": "Instagram",
                        "types": [
                            "Work",
                            "Product",
                            "Organisation",
                            "Service",
                            "Software",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1505,
                                1512
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Knitting"
                        },
                        "text": "knitters",
                        "types": [
                            "Method",
                            "Software",
                            "Product",
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2889,
                                2895
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Torstar"
                        },
                        "text": "Torstar",
                        "types": [
                            "Organisation",
                            "Company",
                            "Media",
                            "Agent"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2874,
                                2886
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Conglomerate_(geology)"
                        },
                        "text": "conglomerates",
                        "types": [
                            "Rock",
                            "Band"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                462,
                                474
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Love_Yourself"
                        },
                        "text": "Love Yourself",
                        "types": [
                            "Work",
                            "Product",
                            "MusicalWork",
                            "Single"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                68,
                                79
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Social_media"
                        },
                        "text": "social media",
                        "types": [
                            "Tools",
                            "Software",
                            "Product",
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1016,
                                1030
                            ],
                            [
                                2150,
                                2164
                            ],
                            [
                                2461,
                                2475
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Eastern_Ontario"
                        },
                        "text": "Eastern Ontario",
                        "types": [
                            "AdministrativeRegion",
                            "Place",
                            "Settlement",
                            "Location",
                            "Region",
                            "PopulatedPlace"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2901,
                                2909
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Postmedia_Network"
                        },
                        "text": "Postmedia",
                        "types": [
                            "Organisation",
                            "Company",
                            "Agent",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                183,
                                190
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Lockdown"
                        },
                        "text": "lockdown",
                        "types": [
                            "Book",
                            "Product",
                            "Definitions"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                3487,
                                3494
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Coronavirus_disease_2019"
                        },
                        "text": "COVID-19",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                57,
                                63
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Hashtag"
                        },
                        "text": "hashtag",
                        "types": [
                            "Label",
                            "RecordLabel"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                632,
                                637
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Oldies"
                        },
                        "text": "oldies",
                        "types": [
                            "Format",
                            "Software",
                            "Product",
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1981,
                                1988
                            ]
                        ],
                        "text": "Register",
                        "types": [
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                992,
                                1000
                            ]
                        ],
                        "text": "Rob Adams",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                996,
                                1000
                            ],
                            [
                                1807,
                                1811
                            ]
                        ],
                        "text": "Adams",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                501,
                                501
                            ],
                            [
                                1442,
                                1442
                            ],
                            [
                                1925,
                                1925
                            ],
                            [
                                2001,
                                2001
                            ],
                            [
                                2211,
                                2211
                            ]
                        ],
                        "text": "Y",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2769,
                                2779
                            ],
                            [
                                3281,
                                3291
                            ],
                            [
                                3911,
                                3921
                            ]
                        ],
                        "text": "Kingstonist",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1008,
                                1030
                            ],
                            [
                                2142,
                                2164
                            ],
                            [
                                2453,
                                2475
                            ]
                        ],
                        "text": "YMCA of Eastern Ontario",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    }
                ],
                "title": [
                    {
                        "indices": [
                            [
                                0,
                                3
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/YMCA"
                        },
                        "text": "YMCA",
                        "types": [
                            "Agent",
                            "Organization",
                            "Organisation",
                            "University"
                        ],
                        "surface_forms": []
                    }
                ]
            },
            "hashtags": [
                "#YMCA",
                "#YMCA",
                "#KingstonOntario",
                "#EasternOntario",
                "#LoveYourself",
                "#Hashtag",
                "#SocialMedia",
                "#Selfcare",
                "#Lockdown",
                "#Fitness",
                "#Oldies",
                "#CEO",
                "#ChiefExecutiveOfficer",
                "#VirtualBand",
                "#VirtualCommunity",
                "#Knitting",
                "#Facebook",
                "#Twitter",
                "#Instagram",
                "#Beehive",
                "#ProcessorRegister",
                "#Conglomerate",
                "#Torstar",
                "#PostmediaNetwork",
                "#SocialJustice",
                "#Corporatism",
                "#Integral"
            ],
            "id": 3181975833,
            "keywords": [
                "challenge",
                "Love",
                "social",
                "connection",
                "YMCA",
                "local news",
                "Kingston community",
                "news",
                "community",
                "local",
                "Kingston",
                "release",
                "February",
                "time",
                "positive",
                "good",
                "#LoveYourselfActually",
                "activities",
                "years",
                "media",
                "photos",
                "virtual group",
                "virtual community",
                "CEO",
                "social injustice",
                "beehive",
                "Twitter",
                "corporate bias",
                "Facebook",
                "Instagram",
                "knitters",
                "self-care",
                "fitness",
                "Torstar",
                "conglomerates",
                "Love Yourself",
                "social media",
                "integral",
                "Eastern Ontario",
                "Postmedia",
                "lockdown",
                "COVID-19",
                "hashtag",
                "oldies",
                "register"
            ],
            "language": "en",
            "links": {
                "permalink": "https://www.kingstonist.com/news/ymcas-love-yourself-actually-challenge-create-social-connection/",
                "related_stories": "/related_stories?story_id=3181975833",
                "clusters": "/stories?clusters[]=167912670"
            },
            "media": [
                {
                    "content_length": 540228,
                    "format": "JPEG",
                    "height": 1600,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2020/06/YMCA-LM.jpg",
                    "width": 2400
                },
                {
                    "content_length": 42879,
                    "format": "PNG",
                    "height": 148,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-25-at-10.02.51-PM.png",
                    "width": 764
                },
                {
                    "content_length": 43963,
                    "format": "JPEG",
                    "height": 180,
                    "type": "image",
                    "url": "https://www.kingstonist.com/wp-content/uploads/2020/12/Kingston-Interval-House.jpg",
                    "width": 728
                }
            ],
            "paragraphs_count": 1,
            "published_at": "2021-01-22T14:49:39Z",
            "sentences_count": 35,
            "sentiment": {
                "body": {
                    "polarity": "positive",
                    "score": 0.808798
                },
                "title": {
                    "polarity": "positive",
                    "score": 0.795611
                }
            },
            "social_shares_count": {
                "facebook": [],
                "google_plus": [],
                "linkedin": [],
                "reddit": [
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T14:49:39Z"
                    }
                ]
            },
            "source": {
                "domain": "kingstonist.com",
                "home_page_url": "https://www.kingstonist.com/",
                "id": 156582,
                "locations": [
                    {
                        "country": "CA"
                    }
                ],
                "logo_url": "",
                "name": "Kingstonist",
                "rankings": {
                    "alexa": [
                        {
                            "fetched_at": "2020-11-13T02:15:40.397912461Z",
                            "rank": 320054
                        },
                        {
                            "country": "CA",
                            "fetched_at": "2020-11-13T02:15:40.397912461Z",
                            "rank": 8255
                        }
                    ]
                },
                "scopes": []
            },
            "summary": {
                "sentences": [
                    "According to the release, the YMCA is challenging individuals and groups to do something that makes them happy and submit photos or videos of these activities to create a community hub of fun.",
                    "“We are hoping to encourage people to do something they enjoy to lift everyone's spirits during a difficult time,” said Rob Adams, CEO, YMCA of Eastern Ontario.",
                    "Help the Y create a virtual community of exercisers, readers, crafters, knitters, writers, whatever-ers by sharing what you're up to during February, the YMCA said in the release.",
                    "Register to let the Y know what you will be doing to #LoveYourselfActually in February, then share photos or videos (using #LoveYourselfActually and tagging the YMCA of Eastern Ontario) through Facebook, Twitter or Instagram.",
                    "That's when we decided to take the Kingstonist, at that time a popular Kingston community blog, and reimagine it as the dedicated, independent local news provider you see now."
                ]
            },
            "title": "YMCA's Love Yourself, Actually challenge hopes to create social connection",
            "words_count": 676,
            "license_type": 0
        },
        {
            "author": {
                "id": 3086054,
                "name": ""
            },
            "body": "Kingston, Ontario – January 18, 2021 – For the first time in Ontario, Kingston Economic Development is thrilled to host the Smart Energy Conference in partnership with Jameson Group and EventWorx Corporation on January 26 and 27, 2021.“We’re thrilled to host energy experts from across Canada and New York as part of the Smart Energy Conference” says Mayor Paterson. “As a city, we’re committed to demonstrating leadership on climate action. Being able to host this event, where we can exchange ideas and learn about best practices and the newest innovations, is a great opportunity and will help us further our goals as a city.”“In 2019, City Council declared a climate emergency in Kingston, and we are pleased to be aligning with Council’s priorities by demonstrating leadership on climate action by starting conversations around reducing greenhouse gas emissions locally,” says Donna Gillespie, CEO, Kingston Economic Development Corporation. “The new Integrated Economic Development Strategy recognizes that as existing businesses are redefined, and new businesses emerge as a result of COVID-19, a climate action and sustainability lens should be included in assessing new and expanded business activities.”Over the two-day gathering, delegates will be encouraged to provide input on shaping a “Net-Zero Community” through an interactive platform. Smart Energy Kingston 2021 will highlight innovative technologies, projects and proven trends so an audience consisting of: municipal energy planners, managers, administrators, academia, industry, startups, investors, and institutional consumers from neighbouring communities.“Economic recovery from COVID 19 through decarbonization is endorsed by global think tanks, companies, and investors. It is extraordinary that Kingston is able to offer this Smart Energy Kingston Conference, as it is the first time in Ontario and also highlights the momentum from local initiatives, including: GhG reduction, energy diversification, and cleantech investment from the award winning company Li-Cycle,” says, Andrew Bacchus, Business Development Officer, Emerging Sectors, Kingston Economic Development Corporation.Smart Energy Event is a well-established conference, now in its 17th year hosting hundreds of attendees. Smart Energy Kingston 2021 will be the first time the Smart Energy brand is held in Ontario.“We are thrilled to highlight the net zero ecosystem being fostered in Kingston, as Kingston’s model is really something to be worth sharing with the rest of Canada. Jameson Group and EventWorx Corporation are pleased to partner with Kingston Economic Development to host Smart Energy Kingston, as events like this are an exceptional way to promote this ecosystem, the companies supporting it and of course all of the work the City of Kingston is undertaking to create a net zero community and also grow an exciting new sector.” Says Wes Scott, the President and CEO of EventWorx Corporation.The goal of the Smart Energy Conference in 2021 is to highlight the important work and projects taking place in Kingston, Ontario to a national audience.Learn More at SmartEnergyKingston.caShare This:EmailFacebookTwitterLinkedInMore News Articles",
            "categories": [
                {
                    "confident": true,
                    "id": "IAB3-8",
                    "label": "Green Solutions",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB3",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB3-8"
                    },
                    "score": 0.1899999976158142,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": true,
                    "id": "IAB3",
                    "label": "Business",
                    "level": 1,
                    "links": {
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iab-qag/IAB3"
                    },
                    "score": 0.10000000149011612,
                    "taxonomy": "iab-qag"
                },
                {
                    "confident": true,
                    "id": "06001000",
                    "label": "renewable energy",
                    "level": 2,
                    "links": {
                        "parent": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/06000000",
                        "self": "https://api.aylien.com/api/v1/classify/taxonomy/iptc-subjectcode/06001000"
                    },
                    "score": 0.23000000417232513,
                    "taxonomy": "iptc-subjectcode"
                }
            ],
            "characters_count": 3194,
            "clusters": [
                167859395
            ],
            "entities": {
                "body": [
                    {
                        "indices": [
                            [
                                357,
                                364
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Paterson,_New_Jersey"
                        },
                        "text": "Paterson",
                        "types": [
                            "PopulatedPlace",
                            "Settlement",
                            "City",
                            "Location",
                            "Place",
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                259,
                                264
                            ],
                            [
                                1488,
                                1493
                            ],
                            [
                                1956,
                                1961
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Energy"
                        },
                        "text": "energy",
                        "types": [
                            "Building",
                            "MusicGenre",
                            "Property"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                899,
                                901
                            ],
                            [
                                2919,
                                2921
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Chief_executive_officer"
                        },
                        "text": "CEO",
                        "types": [
                            "PersonFunction"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                0,
                                16
                            ],
                            [
                                3060,
                                3076
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Kingston,_Ontario"
                        },
                        "text": "Kingston, Ontario",
                        "types": [
                            "PopulatedPlace",
                            "Settlement",
                            "City",
                            "Location",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                0,
                                7
                            ],
                            [
                                70,
                                77
                            ],
                            [
                                684,
                                691
                            ],
                            [
                                904,
                                911
                            ],
                            [
                                1367,
                                1374
                            ],
                            [
                                1773,
                                1780
                            ],
                            [
                                1817,
                                1824
                            ],
                            [
                                2117,
                                2124
                            ],
                            [
                                2277,
                                2284
                            ],
                            [
                                2427,
                                2434
                            ],
                            [
                                2440,
                                2447
                            ],
                            [
                                2590,
                                2597
                            ],
                            [
                                2641,
                                2648
                            ],
                            [
                                2791,
                                2798
                            ],
                            [
                                3060,
                                3067
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Kingston,_Ontario"
                        },
                        "text": "Kingston",
                        "types": [
                            "PopulatedPlace",
                            "Settlement",
                            "City",
                            "Location",
                            "Place",
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1123,
                                1136
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Sustainability"
                        },
                        "text": "sustainability",
                        "types": [
                            "ArchitecturalStructure",
                            "Capacity",
                            "MusicGenre"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                286,
                                291
                            ],
                            [
                                2514,
                                2519
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Canada"
                        },
                        "text": "Canada",
                        "types": [
                            "MusicalArtist",
                            "PopulatedPlace",
                            "Country",
                            "Location",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1671,
                                1685
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Low-carbon_economy"
                        },
                        "text": "decarbonization",
                        "types": [
                            "Economy",
                            "Agent"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                297,
                                304
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/New_York_(state)"
                        },
                        "text": "New York",
                        "types": [
                            "Region",
                            "AdministrativeRegion",
                            "PopulatedPlace",
                            "Settlement",
                            "Location",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                10,
                                16
                            ],
                            [
                                61,
                                67
                            ],
                            [
                                1865,
                                1871
                            ],
                            [
                                2348,
                                2354
                            ],
                            [
                                3070,
                                3076
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Ontario"
                        },
                        "text": "Ontario",
                        "types": [
                            "Provinces",
                            "Settlement",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2905,
                                2913
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/President_of_the_United_States"
                        },
                        "text": "President",
                        "types": [
                            "PersonFunction",
                            "Head",
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                842,
                                855
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Greenhouse_gas"
                        },
                        "text": "greenhouse gas",
                        "types": [
                            "Gas",
                            "ChemicalCompound"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1092,
                                1099
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Coronavirus_disease_2019"
                        },
                        "text": "COVID-19",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1138,
                                1141
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Lens_(optics)"
                        },
                        "text": "lens",
                        "types": [
                            "Device",
                            "Product"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2399,
                                2407
                            ],
                            [
                                2710,
                                2718
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Ecosystem"
                        },
                        "text": "ecosystem",
                        "types": [
                            "Community",
                            "Settlement"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2783,
                                2798
                            ]
                        ],
                        "text": "City of Kingston",
                        "types": [
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                882,
                                896
                            ]
                        ],
                        "text": "Donna Gillespie",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                124,
                                135
                            ],
                            [
                                321,
                                332
                            ],
                            [
                                1354,
                                1365
                            ],
                            [
                                1804,
                                1815
                            ],
                            [
                                2159,
                                2170
                            ],
                            [
                                2264,
                                2275
                            ],
                            [
                                2318,
                                2329
                            ],
                            [
                                2628,
                                2639
                            ],
                            [
                                2964,
                                2975
                            ]
                        ],
                        "text": "Smart Energy",
                        "types": [
                            "Person",
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1367,
                                1379
                            ],
                            [
                                2277,
                                2289
                            ]
                        ],
                        "text": "Kingston 2021",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2036,
                                2043
                            ]
                        ],
                        "text": "Li-Cycle",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2053,
                                2066
                            ]
                        ],
                        "text": "Andrew Bacchus",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2099,
                                2114
                            ]
                        ],
                        "text": "Emerging Sectors",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2890,
                                2898
                            ]
                        ],
                        "text": "Wes Scott",
                        "types": [
                            "Person"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1654,
                                1661
                            ]
                        ],
                        "text": "COVID 19",
                        "types": [
                            "Product"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                70,
                                98
                            ],
                            [
                                904,
                                932
                            ],
                            [
                                2117,
                                2145
                            ],
                            [
                                2590,
                                2618
                            ]
                        ],
                        "text": "Kingston Economic Development",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                124,
                                146
                            ],
                            [
                                321,
                                343
                            ],
                            [
                                2964,
                                2986
                            ]
                        ],
                        "text": "Smart Energy Conference",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                168,
                                180
                            ],
                            [
                                2522,
                                2534
                            ]
                        ],
                        "text": "Jameson Group",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                186,
                                206
                            ],
                            [
                                2540,
                                2560
                            ],
                            [
                                2926,
                                2946
                            ]
                        ],
                        "text": "EventWorx Corporation",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                639,
                                650
                            ]
                        ],
                        "text": "City Council",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                644,
                                650
                            ],
                            [
                                733,
                                739
                            ]
                        ],
                        "text": "Council",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                904,
                                944
                            ],
                            [
                                2117,
                                2157
                            ]
                        ],
                        "text": "Kingston Economic Development Corporation",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                956,
                                995
                            ]
                        ],
                        "text": "Integrated Economic Development Strategy",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "text": "“Net-Zero Community",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2069,
                                2096
                            ]
                        ],
                        "text": "Business Development Officer",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2159,
                                2176
                            ]
                        ],
                        "text": "Smart Energy Event",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                2348,
                                2358
                            ]
                        ],
                        "text": "Ontario.“We",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                1354,
                                1374
                            ],
                            [
                                1804,
                                1824
                            ],
                            [
                                2264,
                                2284
                            ],
                            [
                                2628,
                                2648
                            ]
                        ],
                        "text": "Smart Energy Kingston",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    }
                ],
                "title": [
                    {
                        "indices": [
                            [
                                0,
                                7
                            ]
                        ],
                        "links": {
                            "dbpedia": "http://dbpedia.org/resource/Kingston,_Ontario"
                        },
                        "text": "Kingston",
                        "types": [
                            "PopulatedPlace",
                            "Settlement",
                            "City",
                            "Location",
                            "Place"
                        ],
                        "surface_forms": []
                    },
                    {
                        "indices": [
                            [
                                0,
                                59
                            ]
                        ],
                        "text": "Kingston Hosts National Smart Energy Conference – January 26",
                        "types": [
                            "Organisation"
                        ],
                        "surface_forms": []
                    }
                ]
            },
            "hashtags": [
                "#KingstonOntario",
                "#Ontario",
                "#Energy",
                "#ClimateChangeMitigation",
                "#Canada",
                "#CEO",
                "#ChiefExecutiveOfficer",
                "#Ecosystem",
                "#NewYork",
                "#PatersonNewJersey",
                "#GreenhouseGas",
                "#Sustainability",
                "#Lens",
                "#LowcarbonEconomy",
                "#Momentum",
                "#CleanTechnology",
                "#AriadneAufNaxos",
                "#PresidentOfTheUnitedStates"
            ],
            "id": 3181808284,
            "keywords": [
                "Smart",
                "National",
                "Energy",
                "Hosts",
                "Conference",
                "Kingston",
                "January",
                "Smart Energy",
                "Kingston Economic",
                "Economic",
                "Community",
                "companies",
                "businesses",
                "Ontario",
                "climate",
                "event",
                "action",
                "city",
                "investors",
                "Development",
                "Paterson",
                "energy",
                "CEO",
                "cleantech",
                "Kingston, Ontario",
                "sustainability",
                "Canada",
                "momentum",
                "decarbonization",
                "New York",
                "Bacchus",
                "President",
                "greenhouse gas",
                "COVID-19",
                "COVID",
                "lens",
                "ecosystem",
                "climate action"
            ],
            "language": "en",
            "links": {
                "permalink": "https://energynow.ca/2021/01/kingston-hosts-national-smart-energy-conference-january-26-and-27-2021/",
                "related_stories": "/related_stories?story_id=3181808284",
                "clusters": "/stories?clusters[]=167859395"
            },
            "media": [
                {
                    "content_length": 156592,
                    "format": "PNG",
                    "height": 250,
                    "type": "image",
                    "url": "https://mk0energynowh1jcvf8t.kinstacdn.com/wp-content/uploads/2021/01/Smart-Energy-Kingston-Banner-300x250-1.png",
                    "width": 300
                }
            ],
            "paragraphs_count": 1,
            "published_at": "2021-01-22T12:02:32Z",
            "sentences_count": 18,
            "sentiment": {
                "body": {
                    "polarity": "positive",
                    "score": 0.99235
                },
                "title": {
                    "polarity": "positive",
                    "score": 0.547486
                }
            },
            "social_shares_count": {
                "facebook": [],
                "google_plus": [],
                "linkedin": [],
                "reddit": [
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    },
                    {
                        "count": 0,
                        "fetched_at": "2021-01-22T12:02:32Z"
                    }
                ]
            },
            "source": {
                "domain": "energynow.ca",
                "home_page_url": "https://energynow.ca/",
                "id": 127512,
                "locations": [
                    {
                        "country": "CA"
                    }
                ],
                "logo_url": "",
                "name": "EnergyNow.ca",
                "rankings": {
                    "alexa": [
                        {
                            "fetched_at": "2020-11-17T02:48:26.345526237Z",
                            "rank": 1287191
                        },
                        {
                            "country": "CA",
                            "fetched_at": "2020-11-17T02:48:26.345526237Z",
                            "rank": 45994
                        }
                    ]
                },
                "scopes": []
            },
            "summary": {
                "sentences": [
                    "Kingston, Ontario – January 18, 2021 – For the first time in Ontario, Kingston Economic Development is thrilled to host the Smart Energy Conference in partnership with Jameson Group and EventWorx Corporation on January 26 and 27, 2021.",
                    "”“In 2019, City Council declared a climate emergency in Kingston, and we are pleased to be aligning with Council’s priorities by demonstrating leadership on climate action by starting conversations around reducing greenhouse gas emissions locally,” says Donna Gillespie, CEO, Kingston Economic Development Corporation.",
                    "It is extraordinary that Kingston is able to offer this Smart Energy Kingston Conference, as it is the first time in Ontario and also highlights the momentum from local initiatives, including: GhG reduction, energy diversification, and cleantech investment from the award winning company Li-Cycle,” says, Andrew Bacchus, Business Development Officer, Emerging Sectors, Kingston Economic Development Corporation.Smart Energy Event is a well-established conference, now in its 17th year hosting hundreds of attendees.",
                    "Jameson Group and EventWorx Corporation are pleased to partner with Kingston Economic Development to host Smart Energy Kingston, as events like this are an exceptional way to promote this ecosystem, the companies supporting it and of course all of the work the City of Kingston is undertaking to create a net zero community and also grow an exciting new sector.”",
                    "Says Wes Scott, the President and CEO of EventWorx Corporation.The goal of the Smart Energy Conference in 2021 is to highlight the important work and projects taking place in Kingston, Ontario to a national audience.Learn More at SmartEnergyKingston.caShare This:EmailFacebookTwitterLinkedInMore News Articles"
                ]
            },
            "title": "Kingston Hosts National Smart Energy Conference – January 26 and 27 2021",
            "words_count": 489,
            "license_type": 0
        }
    ],
    "published_at.end": "2021-01-24T03:54:57.306Z",
    "published_at.start": "2021-01-22T03:54:57.306Z"
};
  return (
    <div className="App">  
      <Banner />
      <button onClick={() => getAllArticles()}>Reset</button>
      <div className="card-container">
        {another.stories.map((data, key) => {
          return (
            <div key={key}>
              <Cards
              title={data["title"]}
              excerpt={data["summary"]["sentences"][0]}
              link={data["links"]["permalink"]}
              image={data["media"][0]["url"]}/>
            </div>
          );
        })}
    </div>  
  </div>
  )}

export default App;
