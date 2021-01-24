# [The Good News](http://www.positivenews.space/)
http://www.positivenews.space/

## About Us
Discord Team Channel: #team-64

omridan#1377,
dylan28#7389,
jordanbelinsky#5302,
Turja Chowdhury#6672

Domain.com domain: positivenews.space

## Inspiration
Over the last year headlines across the globe have been overflowing with negative content which clouded over any positive information. In addition everyone has been so focused on what has been going on in other corners of the world and have not been focusing on their local community. We wanted to bring some pride and positivity back into everyone's individual community by spreading positive headlines at the users users location. Our hope is that our contribution shines a light in these darkest of times and spreads a message of positivity to everyone who needs it! 

## What it does
Our platform utilizes the general geolocation of the user along with a filtered API to produce positive articles about the users' local community. The page displays all the articles by showing the headlines and a brief summary and the user has the option to go directly to the source of the article or view the article on our platform. 

## How we built it
The core of our project uses the Aylien news API to gather news articles from a specified country and city while reading only positive sentiments from those articles. We then used the IPStack API to gather the users location via their IP Address. To reduce latency and to maximize efficiency we used JavaScript  in tandem with React opposed to a backend solution to code a filtration of the data received from the API's to display the information and imbed the links. Finally using a combination of React, HTML, CSS and Bootstrap a clean, modern and positive design for the front end was created to display the information gathered by the API's.

## Challenges we ran into
The most significant challenge we ran into while developing the website was determining the best way to filter through news articles and classify them as "positive". Due to time constraints the route we went with was to create a library of common keywords associated with negative news, filtering articles with the respective keywords out of the dictionary pulled from the API.

## Accomplishments that we're proud of
We managed to support a standard Bootstrap layout comprised of a grid consisting of rows and columns to enable both responsive design for compatibility purposes, and display more content on every device. Also utilized React functionality to enable randomized background gradients from a selection of pre-defined options to add variety to the site's appearance. 

## What we learned
We learned a lot of valuable skills surrounding the aspect of remote group work. While designing this project, we were working across multiple frameworks and environments, which meant we couldn't rely on utilizing just one location for shared work. We made combined use of Repl.it for core HTML, CSS and Bootstrap and GitHub in conjunction with Visual Studio Code for the JavaScript and React workloads. While using these environments, we made use of Discord, IM Group Chats, and Zoom to allow for constant communication and breaking out into sub groups based on how work was being split up.

## What's next for The Good News
In the future, the next major feature to be incorporated is one which we titled "Travel the World". This feature will utilize Google's Places API to incorporate an embedded Google Maps window in a pop-up modal, which will allow the user to search or navigate and drop a pin anywhere around the world. The location information from the Places API will replace those provided by the IPStack API to provide positive news from the desired location. This feature aims to allow users to experience positive news from all around the world, rather than just their local community. We also want to continue iterating over our design to maximize the user experience.
