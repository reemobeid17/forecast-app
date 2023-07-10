import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="mt-20 min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
