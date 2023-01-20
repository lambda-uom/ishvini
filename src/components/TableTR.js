import React from "react";
import { Link } from "react-router-dom";
const TableTR = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.chapid}</td>
        <td>{props.chapname}</td>
        <td>{props.depname}</td>
        <td>
          <Link to="/edit" className="btn btn-primary mr-1">
            Edit
          </Link>{" "}
          <Link to="/delete" className="btn btn-danger">
            Delete
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default TableTR;
