import React from "react";
import { Link } from "react-router-dom";
const TableDep = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.depid}</td>
        <td>{props.depname}</td>
        <td>
          <Link to="/editdep" className="btn btn-primary mr-1">
            Edit
          </Link>{" "}
          <Link to="/deletedep" className="btn btn-danger">
            Delete
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default TableDep;
