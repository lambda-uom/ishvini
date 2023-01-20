import React from "react";
import { Link } from "react-router-dom";
const Tableview = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.chapid}</td>
        <td>{props.chapname}</td>
        <td>{props.depname}</td>
        <td>{props.createdby}</td>
      </tr>
    </React.Fragment>
  );
};
export default Tableview;
