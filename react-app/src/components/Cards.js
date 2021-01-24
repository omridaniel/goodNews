import React from 'react'
import Card from 'react-bootstrap/Card'

function Cards() {
    return (
        <>
        <div className="container">
      <div className="row " style={{marginTop: "20px"}}>

            {/* <!-- Left Column --> */}
            <div className="col-md-6">

              {/* <!-- Top Card --> */}
              <Card className="cardStyle2" style={{ borderRadius:"1rem"}}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col" style={{maxWidth: "30%"}}><img src="assets/img/placeholder.jpg" style={{maxWidth:" 100%",maxHeight: "95%",borderRadius: "20px"}}/></div>
                      <div className="col" style={{maxWidth: "100%"}}>
                        <h4 className="text-right">Title of the Article</h4>
                        <p style={{maxWidth: "100%", textAlign: "right"}}>This is where content from the article will go. Usually just a small excerpt.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-left" style={{marginTop: "15px"}}>
                        {/* <!-- <a href="#">Learn More</a> --> */}
                        {/* <!-- <a href="#">Open Article</a> --> */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                          Launch demo modal
                        </button>
                      </div>
                    </div>
                  </div>
              </Card>
              {/* <!-- Button trigger modal --> */}
                

              
                
              {/* <!-- Bottom Card --> */}
              <Card className="cardStyle3" style={{ borderRadius:"1rem"}}>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col" style={{maxWidth: "30%"}}><img src="assets/img/placeholder.jpg" style={{maxWidth: "100%", maxHeight: "95%", borderRadius: "20px"}}/></div>
                      <div className="col" style={{maxWidth: "100%" }}>
                        <h4 className="text-right">Title of the Article</h4>
                        <p style={{maxWidth: "100%",textAlign: "right"}}>This is where content from the article will go. Usually just a small excerpt.</p>
                      </div>
                    </div>
                    <div className="row">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                          Launch demo modal
                        </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* <!-- Right Column --> */}
            <div className="col-md-6 ">

              {/* <!-- Top Card --> */}
              <Card className="cardStyle4" style={{ borderRadius:"1rem"}}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col" style={{maxWidth: "30%"}}><img src="assets/img/placeholder.jpg" style={{maxWidth: "100%", maxHeight: "95%", borderRadius: "20px"}}/></div>
                      <div className="col" style={{maxWidth: "100%" }}>
                        <h4 className="text-right">Title of the Article</h4>
                        <p style={{maxWidth: "100%",textAlign: "right"}}>This is where content from the article will go. Usually just a small excerpt.</p>
                      </div>
                    </div>
                    <div className="row">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                          Launch demo modal
                        </button>
                    </div>
                  </div>
              </Card>

              {/* <!-- Bottom Card --> */}
              <div class="">
              <Card className="cardStyle5" style={{ borderRadius:"1rem"}}>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col" style={{maxWidth: "30%"}}><img src="assets/img/placeholder.jpg" style={{maxWidth: "100%", maxHeight: "95%", borderRadius: "20px"}}/></div>
                      <div className="col" style={{maxWidth: "100%" }}>
                        <h4 className="text-right">Title of the Article</h4>
                        <p style={{maxWidth: "100%",textAlign: "right"}}>This is where content from the article will go. Usually just a small excerpt.</p>
                      </div>
                    </div>
                    <div className="row">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                          Launch demo modal
                        </button>
                    </div>
                  </div>
                </div>
              </Card>

            </div>
          </div>
    </div>
		</div>
        </>
    )
}

export default Cards
