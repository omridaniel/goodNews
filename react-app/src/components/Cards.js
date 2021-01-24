import React, { useState } from 'react';

const  Cards = ({key, title, excerpt, link, image}) => {
  return (
    <div class="card">
                <div className="cardStyle2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col" style={{maxWidth: "30%"}}><img src={image} style={{maxWidth: "100%",maxHeight: "95%",borderRadius: "20px",}}/></div>
                      <div className="col" style={{maxWidth: "100%"}}>
                        <h4 className="text-right">{title}</h4>
                        <p style={{maxWidth: "100%", textAlign: "right"}}>{excerpt}</p>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col text-left" style={{marginTop: "15px"}}>
                        <a href={link} className="btn btn-light" target="_blank">Visit Source</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Cards