import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard({ user, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
    {/* Sidebar */}
    <div style={{ width: isSidebarOpen ? "250px" : "0px", transition: "width 0.3s ease" }}>
      {isSidebarOpen && <Sidebar />}
    </div>
  
    {/* Main Content Area */}
    <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        transition: "margin-left 0.3s ease", 
        marginLeft: isSidebarOpen ? "250px" : "0px" 
    }}>
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
          Logout
        </button>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
