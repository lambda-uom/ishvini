import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TableAllow from "./TableAllow";
const AllocateChapter = () => {
  return (
    <div className="columns mt-5">
      <div className="title">NETS:Departments</div>
      <br></br>
      <TableAllow jobname="Front end developer"></TableAllow>
      <TableAllow jobname="Full stack developer"></TableAllow>
      <TableAllow jobname="UI/UX designer"></TableAllow>
      <TableAllow jobname="Intern for front end development"></TableAllow>
      <TableAllow jobname="System analyst"></TableAllow>
    </div>
  );
};

export default AllocateChapter;
