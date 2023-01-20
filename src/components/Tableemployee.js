import React, { useState } from "react";
import { Link } from "react-router-dom";

import swal from "sweetalert";
const Tableemployee = (props) => {
  const [buttonState, setButtonState] = useState("Request");

  function successmsg() {
    setButtonState("Requested");

    swal({
      title: "Done!",
      text: "Request sent succesfully!",
      icon: "success",
      button: "close",
    });
  }
  return (
    <React.Fragment>
      <tr>
        <td>{props.chapid}</td>
        <td>{props.chapname}</td>
        <td>{props.depname}</td>

        <td>
          <button
            type="button"
            className="mx-auto btn btn-primary mr-1 btn-lg  mt-5"
            onClick={successmsg}
            disabled={buttonState == "Request" ? false : true}
          >
            {buttonState}
          </button>{" "}
        </td>
      </tr>
    </React.Fragment>
  );
};
export default Tableemployee;
