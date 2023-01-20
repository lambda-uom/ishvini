import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Tablejob from "./Tablejob";

const JobtitleList = () => {
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:Jobtitle</div>
      <br></br>
      <Link to="/newjob" className="btn btn-success btn-lg">
        Add New Jobtitle
      </Link>
      <br></br>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>JobtitleNo</th>
            <th>Jobtitle Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Tablejob jobid="J001" jobname="Accountant"></Tablejob>
          <Tablejob jobid="J002" jobname="Software developer"></Tablejob>
          <Tablejob jobid="J003" jobname="HR manager"></Tablejob>
        </tbody>
      </table>
    </div>
  );
};

export default JobtitleList;
