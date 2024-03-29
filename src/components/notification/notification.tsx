import { useToast } from "@chakra-ui/react";
import "./notification.scss";
import { useEffect } from "react";
const notifications = () => {
  const toast = useToast();
  const positions = "bottom-left";

  useEffect(() => {
    const timeshow = 5000;

    const timer = setTimeout(() => {
      toast({
        title: `nguyencong...@gmail.com`,
        description: "Đăng ký ngành quản trị kinh doanh!",
        duration: 1500,
        status: "success",
        position: positions,
        isClosable: true,
      });
    }, timeshow);
    return () => clearTimeout(timer);
  }, []);
  return <></>;
};

export default notifications;
