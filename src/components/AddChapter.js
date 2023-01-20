import React from "react";
import image4 from "./1.svg";
import "../App.css";
import swal from "sweetalert";

const AddChapter = () => {
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
      <div className="title">NETS:Create chapter</div>
      <div className="columns mt-5">
        <div className="column is-half mt-5">
          <form name="myForm" onSubmit={successmsg}>
            <div className="field">
              <label class="ml-5 createchap">Chapter Name</label>
              <div className="control">
                <input
                  type="text"
                  name="cname"
                  className="input my-3 ml-5"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <br></br>
            <div class="dropdown">
              <label class="ml-5 createchap">Related department</label>
              <br></br>
              <select class="optionlist">
                <option value="dept">Department</option>
                <option value="HR">Human Resource</option>
                <option value="Finance">Finance</option>
                <option value="Dev">Development</option>
              </select>
            </div>
            <br></br>
            <div className="control">
              <button
                type="submit"
                className="mx-auto btn btn-primary mr-1 btn-lg column is-half mt-5"
              >
                Save
              </button>

              <div>
                <img src={image4} draggable={false} alt="this is image" />
              </div>
              <div className="field">
                <br></br>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChapter;
