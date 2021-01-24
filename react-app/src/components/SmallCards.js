import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function SmallCards() {
    return (
        <div className="container" style={{ paddingBottom: '2rem'}}>
            <h3 style={{ paddingBottom: "10px"}}> Spotlight Businesses</h3>
        <CardDeck className="container">
            <Card>
                <img src="" ></img>
                <h2 className="container"> Hello World</h2>
            </Card>
            <Card>
            <h1> Hello World</h1>
            </Card>
            <Card>
            <h1> Hello World</h1>
            </Card>
            <Card>
            <h1> Hello World</h1>
            </Card>
        </CardDeck>
        </div>
    )
}

export default SmallCards
