import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChapterList from "./components/ChapterList";
import AddChapter from "./components/AddChapter";
import EditChapter from "./components/EditChapter";
import DeleteChapter from "./components/DeleteChapter";
import DepartmentList from "./components/DepartmentList";
import Allfunctions from "./components/allfunctions";
import AddDepartment from "./components/AddDepartment";
import EditDepartment from "./components/EditDepartment";
import DeleteDepartment from "./components/DeleteDepartment";
import JobtitleList from "./components/JobtitleList";
import AddJobtitle from "./components/AddJobtitle";
import EditJobtitle from "./components/EditJobtitle";
import DeleteJobtitle from "./components/DeleteJobtitle";
import ViewChapter from "./components/ViewChapter";
import AllocateChapter from "./components/AllocateChapter";
import EditAllocate from "./EditAllocate";
import Profile from "./components/Profile";
import SupervisorEnroll from "./components/SupervisorEnroll";
import EmployeeEnroll from "./components/EmployeeEnroll";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Allfunctions />} />
          <Route path="chap" element={<ChapterList />} />
          <Route path="chalist" element={<ChapterList />} />
          <Route path="add" element={<AddChapter />} />
          <Route path="edit" element={<EditChapter />} />
          <Route path="delete" element={<DeleteChapter />} />
          <Route path="adddep" element={<DepartmentList />} />
          <Route path="/newdep" element={<AddDepartment />} />
          <Route path="editdep" element={<EditDepartment />} />
          <Route path="deletedep" element={<DeleteDepartment />} />
          <Route path="addjob" element={<JobtitleList />} />
          <Route path="newjob" element={<AddJobtitle />} />
          <Route path="editjob" element={<EditJobtitle />} />
          <Route path="deletejob" element={<DeleteJobtitle />} />
          <Route path="view" element={<ViewChapter />} />
          <Route path="allocate" element={<AllocateChapter />} />
          <Route path="allocatechapter" element={<EditAllocate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/enroll" element={<SupervisorEnroll />} />
          <Route path="/employeeenroll" element={<EmployeeEnroll />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
