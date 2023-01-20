import React from "react";
import { Link } from "react-router-dom";
const Allfunctions = () => {
  return (
    <div className="container mt-5">
      <br></br>
      <br></br>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Function</th>
            <th>Available To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="adddep">Department page</Link>
            </td>
            <td>Super Admin</td>
          </tr>
          <tr>
            <td>
              <Link to="addjob">Jobtitle page</Link>
            </td>
            <td>Super Admin</td>
          </tr>
          <tr>
            <td>
              <Link to="chap">Chapter page</Link>
            </td>
            <td>Super Admin , System admin</td>
          </tr>

          <tr>
            <td>
              <Link to="view">View chapters</Link>
            </td>
            <td>Super Admin,System admin</td>
          </tr>
          <tr>
            <td>
              <Link to="allocate">Allocate default chapters</Link>
            </td>
            <td>System admin</td>
          </tr>
          <tr>
            <td>
              <Link to="profile">Profile overview</Link>
            </td>
            <td>
              Hired employee,Supervisor,Content creator,System admin,Super admin
            </td>
          </tr>
          <tr>
            <td>
              <Link to="enroll">Enroll request-Supervisor</Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="employeeenroll">
                Enroll request-Hired employee(want to change the button)
              </Link>
            </td>
            <td>Hired Employee</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Allfunctions;
