import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Attendance from "./components/Attendance";
import Login from "./components/Login";
import Name from "./components/SignUpForm/Name";
import Contact from "./components/SignUpForm/Contact";
import Password from "./components/SignUpForm/Password";

function App() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    
    case 1:
      return (
        <div>
          <Name
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <Contact
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Password
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
     
        
  }

  return (
    <Routes>
      <Route
        exact
        path="/attendance"
        element={
          <Attendance
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        }
      >
       
      </Route>
      <Route
        exact
        path="/login"
        element={
          <Login
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        }
      >
       
      </Route>
      <Route
        exact
        path="/"
        element={
          <Name
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        }
      >

      </Route>
      
   
    </Routes>
  );
}

export default App;
