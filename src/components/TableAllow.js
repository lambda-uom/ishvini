import React from "react";
import { Link } from "react-router-dom";
const TableAlllow = (props) => {
  return (
    <React.Fragment>
      <div className="container1">
        <tr>
          <td className="joballocate">
            <h4>{props.jobname}</h4>
          </td>
          <td>
            <Link to="/allocatechapter" className="btn btn-primary mr-1">
              Add Chapters
            </Link>
          </td>
        </tr>
      </div>
    </React.Fragment>
  );
};
export default TableAlllow;
