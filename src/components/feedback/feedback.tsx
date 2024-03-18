import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import {
  Button,
  Container,
  Box,
  Img,
  Text,
  Stack,
  Center,
  Avatar,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";
import { EffectFade, Autoplay } from "swiper/modules";
import "./feedback.scss";
const feedback = () => {
  return (
    <Box>
      <Parallax
        blur={5}
        bgImage="https://dec.neu.edu.vn/_next/image?url=%2Fbg-testi.jpg&w=1920&q=100"
        bgImageAlt="the cat"
        strength={200}
        className="parallax_img"
      >
        <Container maxW={"container.md"} p={"0px"} m="auto" mt={"8%"}>
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Autoplay,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => swiper}
            loop={true}
            navigation={true}
            onSlideChange={() => "slide change"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Center>
                <Stack direction={"column"} spacing={"15px"}>
                  <Box>
                    <Text
                      fontSize={{ base: "15", md: "15", lg: "18" }}
                      fontWeight={"300"}
                      fontStyle={"italic"}
                      textAlign={"center"}
                      color={"rgb(255, 255, 255)"}
                      mb={"20px"}
                    >
                      Đội ngũ cố vấn học tập của Hệ từ xa - trường Đại học Kinh
                      tế Quốc dân vô cùng tuyệt vời, mình đã được hỗ trợ tận
                      tình để luôn theo kịp kế hoạch đề ra. Cảm ơn nhà trường
                      rất nhiều.
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={"25px"}
                  >
                    <Avatar
                      size="xl"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Box>
                      <Text
                        fontSize={{ base: "15", md: "18", lg: "18" }}
                        fontWeight={"bold"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nguyễn Mạnh Dũng
                      </Text>
                      <Text
                        fontSize={{ base: "15", md: "15", lg: "15" }}
                        fontStyle={"italic"}
                        fontWeight={"200"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nhân viên kế toán
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Center>
            </SwiperSlide>
            <SwiperSlide>
              <Center>
                <Stack direction={"column"} spacing={"15px"}>
                  <Box>
                    <Text
                      fontSize={{ base: "15", md: "15", lg: "18" }}
                      fontWeight={"300"}
                      fontStyle={"italic"}
                      textAlign={"center"}
                      color={"rgb(255, 255, 255)"}
                      mb={"20px"}
                    >
                      Đây là một chương trình tuyệt vời, tôi vừa có thể học tập
                      mà lại còn không ảnh hưởng đến công việc hiện tại của
                      mình, kiến thức thì luôn được cập nhật và rất hữu ích cho
                      công việc hàng ngày.
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={"25px"}
                  >
                    <Avatar
                      size="xl"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Box>
                      <Text
                        fontSize={{ base: "15", md: "18", lg: "18" }}
                        fontWeight={"bold"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nguyễn Mạnh Dũng
                      </Text>
                      <Text
                        fontSize={{ base: "15", md: "15", lg: "15" }}
                        fontStyle={"italic"}
                        fontWeight={"200"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nhân viên kế toán
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Center>
            </SwiperSlide>
            <SwiperSlide>
              <Center>
                <Stack direction={"column"} spacing={"15px"}>
                  <Box>
                    <Text
                      fontSize={{ base: "15", md: "15", lg: "18" }}
                      fontWeight={"300"}
                      fontStyle={"italic"}
                      textAlign={"center"}
                      color={"rgb(255, 255, 255)"}
                      mb={"20px"}
                    >
                      Đội ngũ cố vấn học tập của Hệ từ xa - trường Đại học Kinh
                      tế Quốc dân vô cùng tuyệt vời, mình đã được hỗ trợ tận
                      tình để luôn theo kịp kế hoạch đề ra. Cảm ơn nhà trường
                      rất nhiều.
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={"25px"}
                  >
                    <Avatar
                      size="xl"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Box>
                      <Text
                        fontSize={{ base: "15", md: "18", lg: "18" }}
                        fontWeight={"bold"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nguyễn Mạnh Dũng
                      </Text>
                      <Text
                        fontSize={{ base: "15", md: "15", lg: "15" }}
                        fontStyle={"italic"}
                        fontWeight={"200"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nhân viên kế toán
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Center>
            </SwiperSlide>
            <SwiperSlide>
              <Center>
                <Stack direction={"column"} spacing={"15px"}>
                  <Box>
                    <Text
                      fontSize={{ base: "15", md: "15", lg: "18" }}
                      fontWeight={"300"}
                      fontStyle={"italic"}
                      textAlign={"center"}
                      color={"rgb(255, 255, 255)"}
                      mb={"20px"}
                    >
                      Đội ngũ cố vấn học tập của Hệ từ xa - trường Đại học Kinh
                      tế Quốc dân vô cùng tuyệt vời, mình đã được hỗ trợ tận
                      tình để luôn theo kịp kế hoạch đề ra. Cảm ơn nhà trường
                      rất nhiều.
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={"25px"}
                  >
                    <Avatar
                      size="xl"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Box>
                      <Text
                        fontSize={{ base: "15", md: "18", lg: "18" }}
                        fontWeight={"bold"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nguyễn Mạnh Dũng
                      </Text>
                      <Text
                        fontSize={{ base: "15", md: "15", lg: "15" }}
                        fontStyle={"italic"}
                        fontWeight={"200"}
                        color={"rgb(255, 255, 255)"}
                      >
                        Nhân viên kế toán
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Center>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Parallax>
    </Box>
  );
};

export default feedback;
