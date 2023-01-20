import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TableTR from "./TableTR";

const ChapterList = () => {
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:Chapters</div>
      <br></br>
      <Link to="/add" className="btn btn-success btn-lg">
        Add New Chapter
      </Link>
      <br></br>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Related department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableTR
            chapid="C001"
            chapname="Financial Accounting"
            depname="Finance"
          ></TableTR>
          <TableTR
            chapid="C002"
            chapname="React"
            depname="Development"
          ></TableTR>
          <TableTR
            chapid="C003"
            chapname="JAVA"
            depname="Development"
          ></TableTR>
        </tbody>
      </table>
    </div>
  );
};

export default ChapterList;
