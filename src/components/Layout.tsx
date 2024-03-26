import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  const location = useLocation();
  return (
    <>
      {" "}
      {location.pathname !== "/dashboard" && <NavBar />}
      <Outlet />
    </>
  );
}

export default Layout;
