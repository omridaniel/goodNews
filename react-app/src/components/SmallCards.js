import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row';

function SmallCards() {
    return (
        <div className="container" style={{ paddingBottom: '2rem', marginTop: "50px" }}>
            <h3 style={{ paddingBottom: "10px"}}> Spotlight Businesses</h3>
            <CardDeck className="container">
                <Card style={{ background: "linear-gradient(-32deg, rgba(65,216,221,0.74), rgba(47,102,231,0.74))", borderRadius: "15px" }}>
                    <h3 style={{ textAlign: "center" }}>Cornerstone</h3>
                </Card>
                <Card style={{ background: "linear-gradient(-32deg, rgba(65,216,221,0.74), rgba(47,102,231,0.74))", borderRadius: "15px" }}>
                    <h3 style={{ textAlign: "center" }}>Whit</h3>
                </Card>
                <Card style={{ background: "linear-gradient(-32deg, rgba(65,216,221,0.74), rgba(47,102,231,0.74))", borderRadius: "15px" }}>
                    <h3 style={{ textAlign: "center" }}>Mio Gelato</h3>
                </Card>
                <Card style={{ background: "linear-gradient(-32deg, rgba(65,216,221,0.74), rgba(47,102,231,0.74))", borderRadius: "15px" }}>
                    <h3 style={{ textAlign: "center" }}>All Good Things</h3>
                </Card>
            </CardDeck>
        </div>
    )
}

export default SmallCards