import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../App.css";

function DashboardLayout({ handleLogout }) {
  const [showSideBar, setShowSidebar] = useState(true);

  return (
    <div className="layout">
      {showSideBar && <Sidebar onLogout={handleLogout} />}

      <div className="main-area">
        <Header onToggleSideBar={() => setShowSidebar(!showSideBar)} />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
