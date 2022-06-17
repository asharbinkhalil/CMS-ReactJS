import React from 'react'
import { Link } from "react-router-dom"
import amg4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={amg4} alt="" width="40" height="40" class="d-inline-block align-text-top"></img>
        </Link>
        <Link className="navbar-brand" to="/">Parcel Force
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/tracking">Track Parcel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">Services</Link>
            </li>
          </ul>
          <Link to="/make-parcel"  className="btn btn-dark">جلد آرہا ہے۔   </Link>
          <Link to="/about" className="btn btn-outline-danger mx-2">About Us</Link>
          <Link to="/contact-us" className="btn btn-outline-danger mx-2">Contact Us</Link>
          <form className="d-flex">
            <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
           
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar