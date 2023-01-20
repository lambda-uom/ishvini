import React from "react";
import image4 from "./1.svg";
import "../App.css";
import swal from "sweetalert";

const AddDepartment = () => {
  function successmsg() {
    swal({
      icon: "success",
      text: "Successfully created",
    });
  }
  return (
    <div className="page1">
      <br></br>
      <div className="title">NETS:Create Department</div>
      <div className="columns mt-5">
        <div className="column is-half mt-5">
          <form name="myForm">
            <div className="field">
              <label class="ml-5 createchap">Department Name</label>
              <div className="control">
                <input
                  type="text"
                  name="cname"
                  className="input my-3 ml-5"
                  placeholder="Name"
                />
              </div>
            </div>
            <br></br>

            <div>
              <img src={image4} draggable={false} alt="this is image" />
            </div>
            <div className="field">
              <br></br>
              <div className="control">
                <button
                  type="button"
                  className="mx-auto btn btn-primary mr-1 btn-lg column is-half mt-5"
                  onClick={successmsg}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
