/* eslint-disable react-hooks/rules-of-hooks */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Button, Container, Box, Img, Text } from "@chakra-ui/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { useCallback, useEffect } from "react";
import ResultData from "../../models/basemodel/ResultData";
import { Carousel } from "../../models/database/Carousel";
import { conventpathimg } from "../../common/conventpathimg";
import { useAppDispatch } from "../../stores";
import { useSelector } from "react-redux";
import { Datacarousels, IsLoading } from "../../stores/slices/carousel.slice";
import carouselThunks from "../../helper/thunks/carousel.thunks";
import { CircularProgress } from "@chakra-ui/react";

const carousel = () => {
  const dispatch = useAppDispatch();
  const _data = useSelector(Datacarousels) as ResultData;
  const _isLoading = useSelector(IsLoading) as boolean;

  const load = async () => {
    await dispatch(carouselThunks.fetchCarouselData());
  };
  const loaddata = useCallback(async () => {
    await load();
  }, []);

  useEffect(() => {
    loaddata();
  }, [loaddata]);
  if (_isLoading) {
    return <CircularProgress isIndeterminate color="green.300" />;
  }
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
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
      {_data.item.map((item: Carousel) => (
        <SwiperSlide key={item._id}>
          <Box pos={"relative"}>
            <Box display={"inline"}>
              <Img
                src={conventpathimg.getConventpath(item.img)}
                width={"100%"}
                height={{ base: "180px", md: "auto", lg: "auto" }}
              ></Img>
            </Box>
            <Container
              maxW={"container.xl"}
              p={{ base: "10", md: "10", lg: "0" }}
            >
              <Box pos={"absolute"} top={{ base: "20%", md: "20%", lg: "25%" }}>
                <Text
                  className="animate__animated animate__bounce"
                  fontSize={{ base: "10", md: "35", lg: "45" }}
                  fontWeight={"bold"}
                  color={"#ffff"}
                  mb={{ base: "2", md: "10", lg: "15" }}
                >
                  {item.heading}
                </Text>
                <Text
                  fontSize={{ base: "14", md: "50", lg: "60" }}
                  fontWeight={"bold"}
                  color={"#ffff"}
                  className="animate__animated animate__backInLeft"
                  mb={{ base: "2", md: "10", lg: "15" }}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={{ base: "10", md: "25", lg: "40" }}
                  fontWeight={"bold"}
                  color={"#ffff"}
                  className="animate__animated animate__backInRight"
                  mb={{ base: "2", md: "10", lg: "15" }}
                >
                  {item.detail}
                </Text>
                <Button
                  bg="rgb(151, 191, 42)"
                  fontSize={{ base: "12", md: "18", lg: "25" }}
                  fontWeight={"bold"}
                  color={"#ffff"}
                  p={{ base: "0px", md: "20px 10px", lg: "30px 15px" }}
                  width={{ base: "100%", md: "30%", lg: "30%" }}
                  className="animate__animated 
                  animate__bounceIn 
                  animate__infinite
                  animate__slow"
                >
                  Đăng ký ngay
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default carousel;
