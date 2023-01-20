import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TableDep from "./TableDep";

const DepartmentList = () => {
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:Departments</div>
      <br></br>
      <Link to="/newdep" className="btn btn-success btn-lg">
        Add New Department
      </Link>
      <br></br>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableDep depid="D001" depname="Finance"></TableDep>
          <TableDep depid="D002" depname="Development"></TableDep>
          <TableDep depid="D003" depname="HR"></TableDep>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
