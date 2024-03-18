import { Box, IconButton, Image, Stack, Tooltip } from "@chakra-ui/react";
import "./cta.scss";
import { Link } from "react-router-dom";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { MdFacebook } from "react-icons/md";

const cta = () => {
  return (
    <>
      <Box pos={"fixed"} top={"50%"} right={"0%"} zIndex={"1"}>
        <Stack direction={"column"} spacing={"5px"}>
          <Tooltip
            hasArrow
            label="0963.258.745"
            bg="gray.300"
            color="black"
            placement="left"
          >
            <Link to={"/"}>
              <IconButton
                colorScheme="teal"
                isRound={true}
                aria-label="Call Segun"
                size="md"
                icon={<PhoneIcon />}
              />
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="aum@gmail.com"
            bg="gray.300"
            color="black"
            placement="left"
          >
            <Link to={"/"}>
              <IconButton
                colorScheme="red"
                isRound={true}
                aria-label="Call Segun"
                size="md"
                icon={<EmailIcon />}
              />
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="aum@gmail.com"
            bg="gray.300"
            color="black"
            placement="left"
          >
            <Link to={"/"}>
              <IconButton
                colorScheme="blue"
                isRound={true}
                aria-label="Call Segun"
                size="md"
                icon={<MdFacebook />}
              />
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="aum@gmail.com"
            bg="gray.300"
            color="black"
            placement="left"
          >
            <Link to={"/"}>
              <Box  borderRadius="50%" w={"38px"} h={"38px"} overflow={"hidden"}>
                <Image w={"100%"} h={"100%"} objectFit={"fill"} src="/public/logo-zalo-tron.jpg" />
              </Box>
            </Link>
          </Tooltip>
        </Stack>
      </Box>
    </>
  );
};
export default cta;
