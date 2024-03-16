import Articleheader from "../../../components/articleheader/articleheader";
import Cardicon from "../../../components/cardicon/cardicon";
import Carousel from "../../../components/carousel/carousel";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <Articleheader/>
      <Cardicon/>
      <Outlet />
      <Footer />
    </>
  );
};

export default main;
