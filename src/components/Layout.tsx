import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import { Fragment } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = () => {
  return (
    <div className="mt-20 min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
