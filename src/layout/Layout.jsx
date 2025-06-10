import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Navbar toggle={toggle} isDark={isDark} />

      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="outlet" >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
