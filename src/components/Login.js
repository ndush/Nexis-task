import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { Link } from 'react-router-dom'
import image from "./image.png"



const Login = ({ nextStep, handleFormData, values }) => {

  const [error, setError] = useState(false);

 
  const submitFormData = (e) => {
    e.preventDefault();

    
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div class="row">
   <div  class="column left" >
        <img src={image} />
        </div>
        <div class="column right">
          <h1>Login Form</h1>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="Write First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
            
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Write Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Link to="/attendance">
            <Button variant="primary" type="submit">
              Log in
            </Button>
            </Link>
            
          </Form>
        
        </Card.Body>
      </Card>
      
      <p>Don't have an account? <Link to="/">SIGNUP HERE!</Link></p>
      </div>
    </div>
  );
};

export default Login;
