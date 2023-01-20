import "../App.css";
import image5 from "./12.png";

function Profile() {
  return (
    <div className="App">
      {" "}
      {/* this div is a JSX and we pass the name in the curly braces*/}
      <User /> {/* call the User component*/}
    </div>
  );
}

const User = () => {
  {
    /* this is a component*/
  }
  return (
    <div className="column is-half mt-5">
      <br></br>
      <div className="title">NETS:Profile</div>
      <br></br>

      <div className="page">
        <img
          src={image5}
          draggable={false}
          alt="this is image"
          className="img12"
        />
        <p>Name : Jenny A.T Thomas</p>
        <p>Job title : Software developer</p>
        <p>Department : Development</p>
        <p>User Role : Hired Employee</p>
        <p>Email : jenny.thomas@intervest.com</p>
        <p>Phone No : +94773550903</p>
        <p>DOB : 29/09/1999</p>
        <p>Gender : Male</p>
      </div>
    </div>
  );
};

export default Profile;
