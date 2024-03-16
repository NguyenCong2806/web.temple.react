import { Box, Center, Container, Stack, Text } from "@chakra-ui/react";
import "./articleheader.scss";

const articleheader = () => {
  return (
    <>
      <Box>
        <Container maxW={"container.xl"} p={"0px"}>
          <Stack m={"40px 0px"} direction={"column"} spacing={"20px"} textAlign={"center"}>
            <Text
             fontSize={{ base: "10", md: "35", lg: "45" }}
             fontWeight={"400"}
            >NEU E-LEARNING</Text>
            <Text
            fontSize={{ base: "10", md: "35", lg: "45" }}
            fontWeight={"Bold"}
            >CHƯƠNG TRÌNH ĐÀO TẠO TRỰC TUYẾN</Text>
            <Text fontSize={{ base: "10", md: "20", lg: "22" }}
            fontWeight={"300"}>
              Chương trình học Online 100%, tốt nghiệp được nhận Bằng Cử Nhân do
              Đại Học Kinh Tế Quốc Dân cấp, được Bộ GD&ĐT công nhận. Đăng ký
              nhận thông tin tư vấn hoàn toàn Miễn Phí
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default articleheader;
