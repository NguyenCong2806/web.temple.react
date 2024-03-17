import "./cardnumbers.scss";
import { Box, Stack, Container, Text, Link } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import AOS from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";

const cardnumbers = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
  }, []);
  const prefix = "Trên";
  return (
    <>
      <Container maxW={"container.xl"} p={"0px"}>
        <Box
          data-aos="fade-right"
          display={"flex"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          justifyItems={"center"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Link _hidden={{ textDecoration: "none" }}>
            <Box
              _hover={{ boxShadow: "xl" }}
              display={"inline-block"}
              p={"5px"}   
            >
              <Stack direction={"column"} spacing={"20px"} textAlign={"center"}>
                <Box display={"inline-block"}>
                  <EmailIcon
                    fontSize={"50px"}
                    fontWeight={"Bold"}
                    color={"rgb(21, 92, 168)"}
                  />
                </Box>
                <Box display={"inline-block"}>
                  <Box
                    as={"span"}
                    fontSize={{ base: "23", md: "35", lg: "45" }}
                    fontWeight={"500"}
                    color={"rgb(66, 71, 76)"}
                  >
                    <CountUp
                      start={0}
                      end={20000}
                      duration={2}
                      enableScrollSpy={true}
                      scrollSpyDelay={100}
                      separator="."
                      suffix=" %"
                      prefix ={prefix + ' '}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </Box>
                  <Text
                    fontSize={{ base: "23", md: "20", lg: "25" }}
                    fontWeight={"450"}
                    color={"rgb(66, 71, 76)"}
                  >
                    Có việc làm đầy đủ
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default cardnumbers;
