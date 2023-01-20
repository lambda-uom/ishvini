import React from "react";
import image4 from "./1.svg";
import "../App.css";
import swal from "sweetalert";

const AddJobtitle = () => {
  function successmsg(e) {
    e.preventDefault();
    swal({
      icon: "success",
      text: "Successfully created",
    });
  }
  return (
    <div className="page1">
      <br></br>
      <div className="title">NETS:Create Jobtitle</div>
      <br></br>
      <div className="columns mt-5">
        <div className="column is-half mt-5">
          <form name="myForm" onSubmit={successmsg}>
            <div className="field">
              <label class="ml-5 createchap">Jobtitle name</label>
              <div className="control">
                <input
                  type="text"
                  name="jname"
                  className="input my-3 ml-5"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <br></br>
            <label class="ml-5 createchap">Suitable Departments</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value=""></input>
              <label class="form-check-label">Finance</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value=""></input>
              <label class="form-check-label">Development</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value=""></input>
              <label class="form-check-label">Human Resource</label>
            </div>

            <div>
              <img src={image4} draggable={false} alt="this is image" />
            </div>
            <div className="field">
              <br></br>
              <div className="control">
                <button
                  type="submit"
                  className="mx-auto btn btn-primary mr-1 btn-lg column is-half mt-5"
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

export default AddJobtitle;
