import React from "react";
import { Link } from "react-router-dom";
const Tablejob = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.jobid}</td>
        <td>{props.jobname}</td>
        <td>
          <Link to="/editjob" className="btn btn-primary mr-1">
            Edit
          </Link>{" "}
          <Link to="/deletejob" className="btn btn-danger">
            Delete
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default Tablejob;
