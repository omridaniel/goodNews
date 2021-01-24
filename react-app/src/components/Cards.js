import React from 'react';
import Button from 'react-bootstrap/Button'

const Cards = ({ key, title, excerpt, link, image, className }) => {
  return (
    <div className="card container" style={{ borderRadius: "20px", border: "0px", paddingBottom: "1vh" }}>
      <div className={className}>
        <div className="card-body">
          <div className="row">
            <div className="col" style={{ maxWidth: "30%" }}><img src={image} alt="News article cover." style={{ maxWidth: "100%", maxHeight: "95%", borderRadius: "20px" }} /></div>
            <div className="col" style={{ maxWidth: "100%" }}>
              <h4 className="text-left">{title}</h4>
              <p style={{ maxWidth: "100%", textAlign: "left" }}>{excerpt}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-left" style={{ marginTop: "15px" }}>
              <a href={link} rel="noreferrer" target="_blank"><Button variant="btn btn-light">Visit Source</Button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards