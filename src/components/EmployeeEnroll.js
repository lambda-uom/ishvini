import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Tableemployee from "./Tableemployee";

const EmployeeEnroll = () => {
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:Other department chapters</div>

      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Chapter ID</th>
            <th>Chapter Name</th>
            <th>Related department </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Tableemployee
            chapid="C001"
            chapname="Financial Accounting"
            depname="Finance "
          ></Tableemployee>
          <Tableemployee
            chapid="C009"
            chapname="Figma"
            depname="UI/UX "
          ></Tableemployee>
          <Tableemployee
            chapid="C013"
            chapname="Introduction of Management"
            depname="HR"
          ></Tableemployee>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeEnroll;
