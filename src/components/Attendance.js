import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

export default function Attendance() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <table id="attendance">
        <thead>
          <tr>
            <th id="header">Attendance Information</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>Alfred</td>
            <td>present</td>
          </tr>
        </tbody>
      </table>
      <center>
        <Button
          onClick={() => navigate("/")}
          variant="primary"
          type="submit"
        >
          ⥑⥏
        </Button>
      </center>
    </div>
  );
}
