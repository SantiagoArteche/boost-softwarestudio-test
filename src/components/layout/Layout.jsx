import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
