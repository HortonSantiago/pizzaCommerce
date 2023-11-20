import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
