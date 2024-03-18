import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import "./boxtexticonheading.scss";
import { SettingsIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import AOS from "aos";
const boxtexticonheading = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box bg={"rgb(247, 247, 247)"}>
        <Container maxW={"container.xl"} p={"0px"}>
          <Box p={"30px 0px"}>
            <Box textAlign={"center"} mb={"30px"}>
              <Heading
                color={"rgb(66, 71, 76)"}
                mb={"15px"}
                fontSize={{ base: "28", md: "30", lg: "40" }}
                fontWeight={"600"}
              >
                Bạn sẽ nhận được gì?
              </Heading>
              <Text
                color={"rgb(66, 71, 76)"}
                fontSize={{ base: "18", md: "20", lg: "20" }}
                fontWeight={"500"}
              >
                Khi học tại Đại học Kinh Tế Quốc Dân hệ từ xa
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
              <Box display={"inline-block"} w={"24%"} boxShadow='sm' p='6' rounded='md' bg='white'
              data-aos="fade-down-right"
              _hover={{boxShadow:'xl',p:'6',rounded:'md',bg:'white'}}>
                  <Stack direction={"column"} spacing={"25px"}>
                      <Box display={"inline-block"} textAlign={"left"}>
                        <SettingsIcon 
                        fontSize={{ base: "25", md: "30", lg: "50" }}
                        fontWeight={"800"}
                        color={"rgb(43, 145, 255)"}
                        />
                      </Box>
                      <Box>
                        <Heading
                        fontSize={{ base: "30", md: "25", lg: "28" }}
                        fontWeight={"800"}
                        color={"rgb(66, 71, 76)"}
                        >Học online 100%</Heading>
                        <Text
                        mt={"12px"}
                        fontSize={{ base: "18", md: "16", lg: "18" }}
                        fontWeight={"600"}
                        textAlign={"justify"}
                        color={"rgb(66, 71, 76)"}
                        >Chương trình học online giúp bạn chủ động sắp xếp thời gian và không gian học.</Text>
                      </Box>
                  </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default boxtexticonheading;
