import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Input,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  Divider,
  Collapse,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import "./mobileiconnav.scss";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Logo from "../logo/logo";
import { useState } from "react";

const mobileiconnav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isnav, setisnav] = useState(false);
  const onToggle = () => {
    setisnav(!isnav);
  };
  return (
    <>
      <Box display={{ base: "inline-block", md: "none", lg: "none" }}>
        <IconButton
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Logo></Logo>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Stack direction={"row"}>
              <Input type="text" placeholder="Nhập từ tìm kiếm..." />
              <IconButton
                aria-label="Search database"
                colorScheme="blue"
                icon={<SearchIcon />}
              />
            </Stack>
            <Divider orientation="horizontal" m={"15px 0px"} />
            <Box>
              <Stack direction={"column"}>
                <Box p={"10px 0px"} display={"inline-block"}>
                  <Link _hover={{ textDecoration: "none" }}>Trang chủ</Link>
                </Box>
                <Accordion allowToggle border={"none"} outline={"none"}>
                  <AccordionItem border={"none"} outline={"none"} p={"0px"}>
                    <AccordionButton background={"none"} p={"10px 2px"}>
                      <Box as="span" flex="1" textAlign="left">
                        Ngành học
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Công nghệ thông tin
                        </Link>
                      </Box>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Công nghệ thông tin
                        </Link>
                      </Box>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Công nghệ thông tin
                        </Link>
                      </Box>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Công nghệ thông tin
                        </Link>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box p={"10px 0px"} display={"inline-block"}>
                  <Link _hover={{ textDecoration: "none" }}>Giới thiệu</Link>
                </Box>
                <Box p={"10px 0px"} display={"inline-block"}>
                  <Link _hover={{ textDecoration: "none" }}>Đăng ký</Link>
                </Box>
                <Accordion allowToggle border={"none"} outline={"none"}>
                  <AccordionItem border={"none"} outline={"none"} p={"0px"}>
                    <AccordionButton background={"none"} p={"10px 2px"}>
                      <Box as="span" flex="1" textAlign="left">
                        Tin tức
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Tuyển sinh
                        </Link>
                      </Box>
                      <Box p={"10px 0px"}>
                        <Link _hover={{ textDecoration: "none" }}>
                          Thông báo
                        </Link>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </Box>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default mobileiconnav;
