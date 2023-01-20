import image3 from "./3.svg";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DeleteChapter = () => {
  function deletemsg(e) {
    e.preventDefault();
    swal({
      title: "Confirm",
      text: "Are you absolutely sure you want to permanently delete this chapter and all the data it contains?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Chapter has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your chapter is safe!");
      }
    });
  }
  return (
    <div className="columns mt-5">
      <div className="column is-half mt-5">
        <br></br>
        <div className="title">NETS:Delete chapter</div>
        <br></br>
        <form name="myForm" onSubmit={deletemsg}>
          <div className="field">
            <label class="ml-5 createchap">Reason for delete</label>
            <div className="control">
              <textarea class="Reason" rows="4" cols="100" required></textarea>
            </div>
          </div>
          <div></div>
          <br></br>
          <br></br>
          <div>
            <img src={image3} draggable={false} alt="this is car image" />
          </div>

          <div class="container">
            <button type="submit" class="mx-auto btn btn-danger mr-1 btn-lg">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteChapter;
