import Articleheader from "../../../components/articleheader/articleheader";
import Carousel from "../../../components/carousel/carousel";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <Articleheader/>
      <Outlet />
      <Footer />
    </>
  );
};

export default main;
