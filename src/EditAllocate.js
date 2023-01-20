import React from "react";
import { useParams } from "react-router-dom";

const EditAllocate = () => {
  const { chapter } = useParams();
  return (
    <React.Fragment>
      <div className="container mt-3">
        <form>
          <div className="column mt-5 ">
            <br></br>
            <div className="title">NETS:Edit Allocated Chapters</div>
            <br></br>
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Front end web development</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Full stack development</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">UI/UX design</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Python</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Bootstrap</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">MongoDB</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Node</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">CSS</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">C#</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Java</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">React</label>
          </div>
          <br></br>
          <input
            type="submit"
            className="btn btn-primary"
            value="Edit Allocated chapter"
          ></input>{" "}
          &nbsp;
          <input type="reset" className="btn btn-warning" value="Reset"></input>
        </form>
      </div>
    </React.Fragment>
  );
};
export default EditAllocate;
