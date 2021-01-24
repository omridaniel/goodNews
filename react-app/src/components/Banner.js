import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Banner = ({ city, country }) => {
    return (
        <>
         <Jumbotron container-fluid>
      <div className="container">
        <h1>The Good News!</h1>
        <p>
          Description here about seeing positive, exciting news.
        </p>
        <p>
          Location: {city}, {country}
        </p>
        </div>
      </Jumbotron>
        </>
    )
}

export default Banner
