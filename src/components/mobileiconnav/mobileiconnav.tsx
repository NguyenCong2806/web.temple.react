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
  IconButton,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import "./mobileiconnav.scss";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Logo from "../logo/logo";

const mobileiconnav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default mobileiconnav;
