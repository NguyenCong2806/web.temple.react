import Modalpopup from "../../../components/modalpopup/modalpopup";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";

const AppMain = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modalpopup/>
    </>
  );
};

export default AppMain;
