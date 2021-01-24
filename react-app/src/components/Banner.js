import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Banner() {
    return (
        <>
         <Jumbotron container-fluid>
      <div className="container">
        <h1>The Good News!</h1>
        <p>
          Description here about seeing positive, exciting news.
        </p>
        </div>
      </Jumbotron>
        </>
    )
}

export default Banner
