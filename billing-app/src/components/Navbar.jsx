import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineDashboard } from "react-icons/ai";
import { BsGrid, BsBox, BsPerson } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userEmail = auth.currentUser?.email || "User";
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top w-100">
    <div className="container-fluid">
      {/* Sidebar Toggle & Branding */}
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-light me-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <a className="navbar-brand fw-bold" href="/">
          Billingo
        </a>
      </div>
  
      {/* Navbar Items (Shifted to the Right) */}
      <div className="d-flex ms-auto gap-4 align-items-center">
        <a href="#" className="text-light d-flex flex-column align-items-center text-decoration-none">
          <AiOutlineHome size={20} />
          <small>Home</small>
        </a>
  
        <a href="#" className="text-light d-flex flex-column align-items-center text-decoration-none">
          <AiOutlineDashboard size={20} />
          <small>Dashboard</small>
        </a>
  
        <a href="#" className="text-light d-flex flex-column align-items-center text-decoration-none">
          <BsGrid size={20} />
          <small>Orders</small>
        </a>
  
        <a href="#" className="text-light d-flex flex-column align-items-center text-decoration-none">
          <BsBox size={20} />
          <small>Products</small>
        </a>
  
        <a href="#" className="text-light d-flex flex-column align-items-center text-decoration-none">
          <BsPerson size={20} />
          <small>Customers</small>
        </a>
  
        {/* User Dropdown */}
        <div className="dropdown position-relative" ref={dropdownRef}>
  <button
    className="btn btn-outline-light dropdown-toggle"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    <FaUserCircle className="me-2" size={22} />
  </button>

  <ul className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? "show" : ""}`} style={{ right: 0 }}>
    <li>
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={() => navigate("/profile")}>
        Edit Profile
      </button>
    </li>
  </ul>
</div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
