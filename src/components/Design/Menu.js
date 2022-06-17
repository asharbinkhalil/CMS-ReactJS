import React from 'react'
import { Link } from "react-router-dom"
import amg1 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/saignop1.png'
import img2 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/lagin.png'
import img3 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/img3.png'
import img4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/img4.png'

export default function menu() {
  return (
    <>
      <div>
        <div class="card-group">
          <div class="card" style={{borderColor:"black", borderRadius: "20px"}}>
            <img style={{  borderRadius: "20px",height: "34rem" }} class="card-img-top" src={amg1} alt="Card  cap"></img>
            <div class="card-body">
              <br></br>
              <br></br>
              <br></br>
              <Link to="/signup" className="btn btn-dark btn-block">SIGN UP</Link>
              <br></br>
              <br></br>

              <p class="card-text">Are you a new user At Parcel Force. Welcome, its always free
                to be a user of our site. Make an account and get in touch
                of our latest offers, promocodes, fast tracking and many other features.  </p>

            </div>
          </div>
          <div class="card" style={{ borderColor:"black",borderRadius: "20px"}}>
            <img style={{  height: "33rem" ,borderRadius: "20px"}} class="card-img-top" src={img2} alt="Card  cap"></img>
            <div class="card-body">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/login" className="btn btn-dark btn-block"> LOG IN</Link>
              <br></br>
              <br></br>
              <p class="card-text">Already have an Account? Just click the Button above and
                you will be redirected to your account authentication and then you can login</p>
            </div>
          </div>
          <div class="card" style={{ borderColor:"black",borderRadius: "20px"}}>
            <img style={{ height: "39rem",borderRadius: "20px" }} class="card-img-top" src={img3} alt="Card  cap"></img>
            <div class="card-body">
              <Link to="/Tracking" className="btn btn-dark btn-block">TRACK PARCEL</Link>
              <br></br>  <br></br>
              <p class="card-text">Click on the button above and enter the tracking ID and track any parcel.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card" style={{borderColor:"black", borderRadius: "20px"}}>
            <img style={{  height: "37rem",borderRadius: "20px" }} class="card-img-top" src={img4} alt="Card  cap"></img>
            <br></br>
            <div class="card-body"><Link to="/gallery" className="btn btn-dark btn-block"> GALLERY</Link>
              <br></br>  <br></br>
              <p class="card-text">Our workes work day and night for your service.
                Check out the gallery and you will be pleased to see our service quality.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
