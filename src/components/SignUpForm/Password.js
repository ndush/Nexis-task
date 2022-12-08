import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import image from "../image.png"


const Password = ({ nextStep, handleFormData, prevStep, values }) => {
  const navigate = useNavigate()
  
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();

    
    if (validator.isEmpty(values.password)) {
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
      <h1>Signup Form</h1>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="password"
                placeholder="Write Password"
                onChange={handleFormData("password")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="secondary" onClick={prevStep}>
                back
              </Button>

             
              <Button
                onClick={() => navigate("/attendance")}
                variant="primary"
                type="submit"
              >
                SignUp
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Password;
