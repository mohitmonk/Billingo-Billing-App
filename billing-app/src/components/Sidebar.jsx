import { FaHome, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
      <h2 className="fw-bold">Menu</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">
            <FaHome className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link text-white">
            <FaUsers className="me-2" /> Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link text-white">
            <FaCog className="me-2" /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
