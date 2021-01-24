import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Banner = ({ city, country }) => {
    return (
        <>
         <Jumbotron container-fluid style={{ paddingTop: '1rem', paddingBottom: '1rem'}}>
          <div className="container text-center">
            <h1>The Good News!</h1>
          </div>
        </Jumbotron>
        </>
    )
}

export default Banner
