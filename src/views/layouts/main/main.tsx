import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default main;
