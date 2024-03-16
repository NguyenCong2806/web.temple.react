import { Box, Container } from "@chakra-ui/react";
import Dropdownnav from "../../../components/dropdownnav/dropdownnav";
import Logo from "../../../components/logo/logo";
import "./header.scss";
import Mobileiconnav from "../../../components/mobileiconnav/mobileiconnav";

const header = () => {
  return (
    <>
      <Box p={"10px 0px"} bg={"#3366FF"}>
        <Container maxW={"container.xl"} p={"0px"}>
          <Box
            display={"flex"}
            justifyContent={{ base: "space-around", md: "space-around", lg: "space-between" }}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Logo />
            <Mobileiconnav/>
            <Dropdownnav />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default header;
