import { Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link className="sidebar-link" to="/alltasks">
        All Tasks
      </Link>

      <Link className="sidebar-link" to="/completedtasks">
        Completed Tasks
      </Link>
      <Link className="sidebar-link" to="/">
        Create Task
      </Link>
    </div>
  );
}
export default Sidebar;
