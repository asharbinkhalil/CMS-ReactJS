import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import welcome from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/welcome.gif'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <br></br>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <Card style={{ borderRadius: "20px" }}>
        <Card.Img
          style={{ borderRadius: "20px" }}
          variant="top"
          src={welcome}
        />
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}



          <Link to="/make-parcel" className="btn btn-primary w-100 mt-3">
            Make Parcel</Link>


          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>

        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="btn btn-dark w-100 mt-3" variant="link" onClick={handleLogout}>
          <p>Log Out</p>
        </Button>
      </div>
      <br></br>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    </>
  )
}
