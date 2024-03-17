import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import "./modalpopup.scss";
import { useEffect, useState } from "react";
const modalpopup = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModal, setisModel] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onClose =()=>{
    setisModel(!isModal);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const timeshow = 2500;
    const timer = setTimeout(() => {
      setisModel(!isModal);
    }, timeshow);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal isOpen={isModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>Chào mọi người</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default modalpopup;
