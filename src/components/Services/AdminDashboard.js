import React from 'react'
import { Link } from 'react-router-dom'
import img4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/courierwala.jpg'
const AdminDashboard = () => {
  return (
    <div>
       <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="card" style={{ borderRadius: "20px"}}>
        <img class="card-img-top" src={img4} alt="Card pictore cap" style={{ borderRadius: "20px"}} />
        <div class="card-body">
         

          <Link to="/queries" className="btn btn-dark btn-lg btn-block mx-8">Check All Queries</Link>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  )
}

export default AdminDashboard