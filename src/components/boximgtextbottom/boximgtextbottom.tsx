import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./boximgtextbottom.scss";
import { SettingsIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import AOS from "aos";
import Build from "react-countup";
import { Link } from "react-router-dom";
const boximgtextbottom = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box>
        <Container maxW={"container.xl"} p={"0px"}>
          <Box p={"30px 0px"}>
            <Box textAlign={"center"} mb={"30px"}>
              <Heading
                color={"rgb(66, 71, 76)"}
                mb={"15px"}
                fontSize={{ base: "28", md: "30", lg: "40" }}
                fontWeight={"600"}
              >
                Danh sách ngành học
              </Heading>
              <Text
                color={"rgb(66, 71, 76)"}
                fontSize={{ base: "18", md: "20", lg: "20" }}
                fontWeight={"500"}
              >
                Các ngành học trường ĐH Kinh Tế Quốc Dân
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              gap={"5px 5px"}
            >
              <Box
                display={"inline-block"}
                w={"24%"}
                boxShadow="sm"
                rounded="md"
                bg="white"
                data-aos="fade-down-right"
              >
                <Link to={"/"}>
                  <Stack className="box_img_text" direction={"column"} spacing={"25px"} pos={"relative"}>
                    <Box display={"inline-block"}>
                      <Image src="https://dec.neu.edu.vn/_next/image?url=%2Flist-qtkd.jpg&w=640&q=75" />
                    </Box>
                    <Box
                    className="box_text"
                      pos={"absolute"}
                      p={"10px"}
                      bg={"rgba(193, 193, 193,0.85)"}
                      w={"100%"}
                      h={"100%"}
                    >
                      <Heading
                        fontSize={{ base: "30", md: "25", lg: "28" }}
                        fontWeight={"700"}
                        color={"rgb(66, 71, 76)"}
                      >
                        Công nghệ thông tin
                      </Heading>
                      <Text
                        mt={"12px"}
                        fontSize={{ base: "18", md: "15", lg: "16" }}
                        fontWeight={"600"}
                        textAlign={"justify"}
                        color={"rgb(66, 71, 76)"}
                      >
                        Chương trình học online giúp bạn chủ động sắp xếp thời
                        gian và không gian học.
                      </Text>
                      <Button
                        bg={"rgb(3, 119, 30)"}
                        color={"rgb(255, 255, 255)"}
                        mt="10px"
                        textAlign={"center"}
                        _hover={{ bg: "rgb(0, 102, 23)" }}
                      >
                        Đăng ký
                      </Button>
                    </Box>
                  </Stack>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default boximgtextbottom;
