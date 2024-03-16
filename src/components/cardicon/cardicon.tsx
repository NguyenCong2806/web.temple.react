import "./cardicon.scss";
import { Box, Stack, Container, Text,Link } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import AOS from "aos";
import { useEffect } from "react";

const cardicon = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return <>
    <Container maxW={"container.xl"} p={"0px"}>
        <Box data-aos="fade-right"
          display={"flex"}
          flexDirection={"row"}
          justifyItems={"center"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Link _hidden={{textDecoration:"none"}}>
            <Box _hover={{boxShadow :'xl'}} display={"inline-block"} p={"5px"}>
              <Stack direction={"column"} spacing={"20px"} textAlign={"center"}>
                <Box display={"inline-block"}>
                  <EmailIcon
                    fontSize={"50px"}
                    fontWeight={"Bold"}
                    color={"rgb(21, 92, 168)"}
                  />
                </Box>
                <Box display={"inline-block"}>
                  <Text
                    mb={"10px"}
                    fontSize={{ base: "15", md: "18", lg: "23" }}
                    fontWeight={"bold"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Đăng kí học
                  </Text>
                  <Text
                    fontSize={{ base: "12", md: "13", lg: "15" }}
                    fontWeight={"400"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Hỗ trợ và nhận tư vấn miễn phí 24/7
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Link>
          <Link _hidden={{textDecoration:"none"}}>
            <Box _hover={{boxShadow :'xl'}} display={"inline-block"} p={"5px"}>
              <Stack direction={"column"} spacing={"20px"} textAlign={"center"}>
                <Box display={"inline-block"}>
                  <EmailIcon
                    fontSize={"50px"}
                    fontWeight={"Bold"}
                    color={"rgb(21, 92, 168)"}
                  />
                </Box>
                <Box display={"inline-block"}>
                  <Text
                    mb={"10px"}
                    fontSize={{ base: "15", md: "18", lg: "23" }}
                    fontWeight={"bold"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Đăng kí học
                  </Text>
                  <Text
                    fontSize={{ base: "12", md: "13", lg: "15" }}
                    fontWeight={"400"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Hỗ trợ và nhận tư vấn miễn phí 24/7
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Link>
          <Link _hidden={{textDecoration:"none"}}>
            <Box _hover={{boxShadow :'xl'}} display={"inline-block"} p={"5px"}>
              <Stack direction={"column"} spacing={"20px"} textAlign={"center"}>
                <Box display={"inline-block"}>
                  <EmailIcon
                    fontSize={"50px"}
                    fontWeight={"Bold"}
                    color={"rgb(21, 92, 168)"}
                  />
                </Box>
                <Box display={"inline-block"}>
                  <Text
                    mb={"10px"}
                    fontSize={{ base: "15", md: "18", lg: "23" }}
                    fontWeight={"bold"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Đăng kí học
                  </Text>
                  <Text
                    fontSize={{ base: "12", md: "13", lg: "15" }}
                    fontWeight={"400"}
                    color={"rgb(66, 71, 76)"}
                  >
                    {" "}
                    Hỗ trợ và nhận tư vấn miễn phí 24/7
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Link>
        </Box>
      </Container>
  </>;
};

export default cardicon;
