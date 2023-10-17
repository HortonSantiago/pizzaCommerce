import Footer from "../../pages/Footer/Footer";
import Navbar from "../../pages/Navbar/Navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Navbar />
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
