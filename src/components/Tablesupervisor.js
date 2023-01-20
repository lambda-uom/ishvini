import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Tablesupervisor = (props) => {
  const [buttonState, setButtonState] = useState("Accept");
  const [deleteState, setdeleteState] = useState("Decline");
  function successmsg() {
    setButtonState("Accepted");
    swal({
      title: "Are you sure",
      text: "You want to give access to this chapter?",
      icon: "info",
      buttons: true,
      buttons: ["No", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        swal("Request accepted succesfully!", {
          icon: "success",
        });
      } else {
        swal("No changes");
      }
    });
  }
  function declinemsg() {
    setdeleteState("Declined");
    swal({
      title: "Are you sure",
      text: "You don't want to give access to this chapter?",
      icon: "warning",
      buttons: true,

      buttons: ["No", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        swal("Request is Rejected!", {
          icon: "success",
        });
      } else {
        swal("No changes");
      }
    });
  }
  return (
    <React.Fragment>
      <tr>
        <td>{props.empid}</td>
        <td>{props.empname}</td>
        <td>{props.jobname}</td>
        <td>{props.chapname}</td>
        <td>
          <button
            type="button"
            className="mx-auto btn btn-primary mr-1 btn-lg  mt-5"
            onClick={successmsg}
            disabled={buttonState == "Accept" ? false : true}
          >
            {buttonState}
          </button>{" "}
          <button
            type="button"
            className="mx-auto btn btn-danger mr-1 btn-lg  mt-5"
            onClick={declinemsg}
            disabled={deleteState == "Decline" ? false : true}
          >
            {deleteState}
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default Tablesupervisor;
