import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./imagelist.scss";

const imagelist = () => {
  return (
    <>
      <Container maxW={"container.xl"} p={{ base: "0px 5px", md: "0%", lg: "0%" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Box className="box_img" pos={"relative"} display={"inline-block"} w={{ base: "100%", md: "50%", lg: "25%" }}>
            <Box display={"inline-block"}>
              <Image src="https://themewagon.github.io/kider/img/about-1.jpg" />
            </Box>
            <Box
              className="box_text"
              pos={"absolute"}
              bg={"rgba(1, 35, 73,0.8)"}
              w={"100%"}
              h={"100%"}
              top={"0px"}
              p={"10px"}
            >
              <Center w={"100%"} h={"100%"} textAlign={"end"}>
                <Stack direction={"column"} spacing={"20px"}>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Button>Đăng ký</Button>
                </Stack>
              </Center>
            </Box>
          </Box>
          <Box className="box_img" pos={"relative"} display={"inline-block"} w={{ base: "100%", md: "50%", lg: "25%" }}>
            <Box display={"inline-block"}>
              <Image src="https://themewagon.github.io/kider/img/about-1.jpg" />
            </Box>
            <Box
              className="box_text"
              pos={"absolute"}
              bg={"rgba(1, 35, 73,0.8)"}
              w={"100%"}
              h={"100%"}
              top={"0px"}
              p={"10px"}
            >
              <Center w={"100%"} h={"100%"} textAlign={"end"}>
                <Stack direction={"column"} spacing={"20px"}>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Button>Đăng ký</Button>
                </Stack>
              </Center>
            </Box>
          </Box>
          <Box className="box_img" pos={"relative"} display={"inline-block"} w={{ base: "100%", md: "50%", lg: "25%" }}>
            <Box display={"inline-block"}>
              <Image src="https://themewagon.github.io/kider/img/about-1.jpg" />
            </Box>
            <Box
              className="box_text"
              pos={"absolute"}
              bg={"rgba(1, 35, 73,0.8)"}
              w={"100%"}
              h={"100%"}
              top={"0px"}
              p={"10px"}
            >
              <Center w={"100%"} h={"100%"} textAlign={"end"}>
                <Stack direction={"column"} spacing={"20px"}>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Button>Đăng ký</Button>
                </Stack>
              </Center>
            </Box>
          </Box>
          <Box className="box_img" pos={"relative"} display={"inline-block"} w={{ base: "100%", md: "50%", lg: "25%" }}>
            <Box display={"inline-block"}>
              <Image src="https://themewagon.github.io/kider/img/about-1.jpg" />
            </Box>
            <Box
              className="box_text"
              pos={"absolute"}
              bg={"rgba(1, 35, 73,0.8)"}
              w={"100%"}
              h={"100%"}
              top={"0px"}
              p={"10px"}
            >
              <Center w={"100%"} h={"100%"} textAlign={"end"}>
                <Stack direction={"column"} spacing={"20px"}>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Text color={"#ffff"}>GÁNH HÁT LÔ TÔ HƯƠNG NAM </Text>
                  <Button>Đăng ký</Button>
                </Stack>
              </Center>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default imagelist;
