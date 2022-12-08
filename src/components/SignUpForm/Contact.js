import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import image from "../image.png"



const Contact = ({ nextStep, handleFormData, prevStep, values }) => {
   
  const [error, setError] = useState(false);

   
  const submitFormData = (e) => {
    e.preventDefault();

     
    if (validator.isEmpty(values.phoneNumber) || validator.isEmpty(values.email)) {
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
                type="number"
                placeholder="+ 880 - 1xxxxxxxx"
                onChange={handleFormData("phoneNumber")}
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
                type="email"
                placeholder="Write Email Address"
                onChange={handleFormData("email")}
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

              <Button variant="primary" type="submit">
                Next Step ➙
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Contact;
