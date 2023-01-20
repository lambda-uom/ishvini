import image1 from "./2.svg";
import swal from "sweetalert";
const EditJobtitle = () => {
  function successmsg() {
    swal({
      icon: "success",
      text: "Successfully changed",
    });
  }

  return (
    <div className="columns mt-5">
      <div className="column is-half mt-5">
        <br></br>
        <div className="title">NETS:Rename Jobtitle</div>
        <br></br>
        <form>
          <div className="field">
            <label class="ml-5 createchap">Jobtitle Name after edit</label>
            <div className="control">
              <input type="text" className="input" placeholder="Name" />
            </div>
            <br></br>
            <label class="ml-5 createchap">Reason</label>
            <div className="control">
              <textarea class="Reason" rows="4" cols="100"></textarea>
            </div>
          </div>
          <div></div>
          <br></br>
          <br></br>
          <div>
            <img src={image1} draggable={false} alt="this is image" />
          </div>

          <div className="field">
            <div className="control">
              <button
                type="button"
                className="mx-auto btn btn-primary mr-1 btn-lg  mt-5"
                onClick={successmsg}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobtitle;
