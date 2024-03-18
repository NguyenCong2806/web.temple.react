import { Box } from "@chakra-ui/react";
import Cta from "../../../components/cta/cta";
import Modalpopup from "../../../components/modalpopup/modalpopup";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./main.scss";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Advertisement from "../../../components/advertisement/advertisement";
import Notifcations from "../../../components/notification/notification";
const AppMain = () => {
  return (
    <>
      <Box>
        <Header />
        <Outlet />
        <Footer />
        <Modalpopup />
        <ScrollToTop smooth />
        <Cta/>
        <Advertisement/>
        <Notifcations/>
      </Box>
    </>
  );
};

export default AppMain;
