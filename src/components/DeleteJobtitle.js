import image3 from "./3.svg";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DeleteJobtitle = () => {
  function deletemsg() {
    swal({
      title: "Confirm",
      text: "Are you absolutely sure you want to permanently delete this jobtitle and all the data it contains?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Jobtitle has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Jobtitle is safe!");
      }
    });
  }
  return (
    <div className="columns mt-5">
      <div className="column is-half mt-5">
        <br></br>
        <div className="title">NETS:Delete Jobtitle</div>
        <br></br>
        <form>
          <div className="field">
            <label class="ml-5 createchap">Reason for delete</label>
            <div className="control">
              <textarea class="Reason" rows="4" cols="100"></textarea>
            </div>
          </div>
          <div></div>
          <br></br>
          <br></br>
          <div>
            <img src={image3} draggable={false} alt="this is car image" />
          </div>

          <div class="container">
            <button
              type="button"
              class="mx-auto btn btn-danger mr-1 btn-lg"
              onClick={deletemsg}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteJobtitle;
