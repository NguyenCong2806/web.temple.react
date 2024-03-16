import { Box, Container, Stack, Text,Divider } from "@chakra-ui/react";
import "./articleheader.scss";
import { useEffect } from "react";
import AOS from "aos";
const articleheader = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <Box>
        <Container maxW={"container.xl"} p={"0px"} data-aos="fade-up">
          <Stack m={"40px 0px"} direction={"column"} spacing={"20px"} textAlign={"center"}>
            <Text
             fontSize={{ base: "10", md: "35", lg: "45" }}
             fontWeight={"400"}
             color={"rgb(66, 71, 76)"}
            >NEU E-LEARNING</Text>
            <Text
            fontSize={{ base: "10", md: "35", lg: "45" }}
            fontWeight={"700"}
            color={"rgb(66, 71, 76)"}
            >CHƯƠNG TRÌNH ĐÀO TẠO TRỰC TUYẾN</Text>
            <Text fontSize={{ base: "10", md: "20", lg: "22" }}
            color={"rgb(66, 71, 76)"}
            fontWeight={"300"}>
              Chương trình học Online 100%, tốt nghiệp được nhận Bằng Cử Nhân do
              Đại Học Kinh Tế Quốc Dân cấp, được Bộ GD&ĐT công nhận. Đăng ký
              nhận thông tin tư vấn hoàn toàn Miễn Phí
            </Text>
          </Stack>
          <Divider m={"10px 0px"} orientation='horizontal' />
        </Container>
       
      </Box>
    </>
  );
};
export default articleheader;
