import { Box, Button, Image } from "@chakra-ui/react";
import "./advertisement.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
const advertisement = () => {
  return (
    <>
      <Box
        display={"inline-block"}
        w={"15%"}
        pos={"fixed"}
        top={"45%"}
        left={"0%"}
      >
        <Box>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box>
                <Image src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-2862.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image src="https://img.freepik.com/free-psd/new-collection-sneakers-social-media-template_505751-3255.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-template-design_505751-4476.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais" />
              </Box>
            </SwiperSlide>
          </Swiper>
          <Button w={"100%"}>Đăng ký</Button>
        </Box>
      </Box>
    </>
  );
};
export default advertisement;
