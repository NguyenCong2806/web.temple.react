import {
  Box,
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
} from "@chakra-ui/react";
import "./dropdownnav.scss";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const dropdownnav = () => {
  return (
    <>
      <Box display={{ base: "none", md: "none", lg: "inline-flex" }}>
        <Stack direction={["column", "row"]} spacing="35px">
          <Box display={"inline-block"}>
            <Link
              className="text_size"
              color={"#ffff"}
              _hover={{ textDecoration: "none" }}
            >
              Trang chủ
            </Link>
          </Box>
          <Box display={"inline-block"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  className="text_size"
                  color={"#ffff"}
                  _hover={{ textDecoration: "none" }}
                >
                  Ngành học
                  <ChevronDownIcon fontSize={"18px"} />
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody p={"15px"}>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Công nghệ thông tin</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Kế toán</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Quản trị kinh doanh</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Ngôn ngữ anh</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Luật</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box display={"inline-block"}>
            <Link
              className="text_size"
              color={"#ffff"}
              _hover={{ textDecoration: "none" }}
            >
              Giới thiệu
            </Link>
          </Box>
          <Box display={"inline-block"}>
            <Link
              className="text_size"
              color={"#ffff"}
              _hover={{ textDecoration: "none" }}
            >
              Đăng ký
            </Link>
          </Box>
          <Box display={"inline-block"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  className="text_size"
                  color={"#ffff"}
                  _hover={{ textDecoration: "none" }}
                >
                  Tin tức
                  <ChevronDownIcon fontSize={"18px"} />
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody p={"15px"}>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Tuyển sinh</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                  <Link _hover={{ textDecoration: "none" }}>
                    <HStack p={"10px 0px"} spacing="24px">
                      <Box w={"90%"}>
                        <Text>Thông báo</Text>
                      </Box>
                      <Box w={"10%"}>
                        <ChevronRightIcon fontSize={"18px"} />
                      </Box>
                    </HStack>
                  </Link>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box display={"inline-block"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Text
                  className="text_size"
                  color={"#ffff"}
                  _hover={{ textDecoration: "none", cursor:"pointer" }}
                >
                  <SearchIcon />
                </Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody p={"15px"}>
                  <Stack direction={"row"}>
                    <Input type="text" placeholder="Nhập từ tìm kiếm..."/>
                    <IconButton
                      aria-label="Search database"
                      colorScheme='blue'
                      icon={<SearchIcon />}
                    />
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default dropdownnav;
