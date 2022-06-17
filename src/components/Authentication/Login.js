import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import amg4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/crd.jpg'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      if (emailRef.current.value==="admin@parcelforce.com") {
        history.push("/admin-dashboard")
      } else {
        history.push("/dashboard")
      }
       
      
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (

    <>
 <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <Card style={{ borderRadius: "20px"}}>
        <Card.Img
        style={{ borderRadius: "20px"}}
          variant="top"
          src={amg4}
        />
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 mt-2" >
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    </>
  )
}
