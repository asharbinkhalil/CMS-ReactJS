import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import amg4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/crd.jpg'
import validator from 'validator'
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setError('Strong Password')
    } else {
      setError('Not a Strong Password')
    }
  }
  const [, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }


  async function handleSubmit(e) {
    e.preventDefault()


    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")

    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <> <br></br>  <br></br>  <br></br>  <br></br>  
      <Card style={{ borderRadius: "20px" }}>
        <Card.Img
          style={{ borderRadius: "20px" }}
          variant="top"
          src={amg4}
        />
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} onChange={(e) => validateEmail(e)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required onChange={(e) => validate(e.target.value)} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100  mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    </>
  )
}
