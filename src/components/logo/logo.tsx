import { Box, Link, Image } from "@chakra-ui/react";
import "./logo.scss";

const logo = () => {
  return (
    <>
      <Box display={"inline-block"}>
        <Link href="#">
          <Image
            height={{ base: "50", md: "70", lg: "90" }}
            width={{ base: "50", md: "70", lg: "90" }}
            src="https://dec.neu.edu.vn/logo-neu.png"
          />
        </Link>
      </Box>
    </>
  );
};
export default logo;
