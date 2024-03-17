import "./boximgtext.scss";
import { Box, Container, Text, Heading, Button, Image } from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";
const boximgtext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        AOS.init();
      }, []);
      const dataaos = "fade-right";
  return (
    <Box>
      <Box bg={"rgb(66, 71, 76)"} data-aos={dataaos}>
        <Container maxW={"container.xl"} p={"0px"}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            p={{ base: "5px", md: "50px 0px", lg: "50px 0px" }}
          >
            <Box display={"inline-block"} w={{ base: "100%", md: "48%", lg: "45%" }}>
              <Heading color={"rgb(255, 255, 255)"}
              fontWeight={"750"}
              mb={"30px"}
              >
                Đại Học Kinh Tế Quốc Dân
              </Heading>
              <Text color={"rgb(255, 255, 255)"} mb={{ base: "40px", md: "35px", lg: "40px" }} textAlign={"justify"}>
                Trường Đại Học đầu ngành về kinh tế và quản trị kinh doanh, được
                đầu tư bài bản về chất lượng chương trình học và cơ sở vật chất,
                đảm bảo chất lượng đầu vào và đầu ra chương trình E-Learning.
              </Text>
              <Button mb={{ base: "40px", md: "0px", lg: "0px" }}>Đăng ký ngay</Button>
            </Box>
            <Box display={"inline-block"} w={{ base: "100%", md: "48%", lg: "45%" }}>
              <Image src="https://dec.neu.edu.vn/_next/image?url=%2Fbg-trend.webp&w=750&q=75"></Image>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bg={"rgb(255, 255, 255)"} data-aos="fade-left">
        <Container maxW={"container.xl"} p={"0px"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            p={"50px 0px"}
          >
            <Box display={"inline-block"} w={"45%"}>
              <Image src="https://dec.neu.edu.vn/_next/image?url=%2Fbg-trend.webp&w=750&q=75"></Image>
            </Box>
            <Box display={"inline-block"} w={"45%"}>
              <Heading color={"rgb(66, 71, 76)"}>
                Đại Học Kinh Tế Quốc Dân
              </Heading>
              <Text color={"rgb(66, 71, 76)"}>
                Trường Đại Học đầu ngành về kinh tế và quản trị kinh doanh, được
                đầu tư bài bản về chất lượng chương trình học và cơ sở vật chất,
                đảm bảo chất lượng đầu vào và đầu ra chương trình E-Learning.
              </Text>
              <Button>Đăng ký ngay</Button>
            </Box>
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default boximgtext;
