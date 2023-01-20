import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Tablesupervisor from "./Tablesupervisor";

const SupervisorEnroll = () => {
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:Enroll request</div>

      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Jobtitle </th>
            <th>Chapter </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Tablesupervisor
            empid="1234Y"
            empname="Humill mirin"
            jobname="Accountant"
            chapname="Web technologies"
          ></Tablesupervisor>
          <Tablesupervisor
            empid="1123U"
            empname="Nelli mirror"
            jobname="Backend developer"
            chapname="React"
          ></Tablesupervisor>
          <Tablesupervisor
            empid="1236T"
            empname="Kerney samuvel"
            jobname="UI/UX designer"
            chapname="Front end"
          ></Tablesupervisor>
        </tbody>
      </table>
    </div>
  );
};

export default SupervisorEnroll;
