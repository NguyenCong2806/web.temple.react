import { Box } from "@chakra-ui/react";
import Articleheader from "../../components/articleheader/articleheader";
import Boximgtext from "../../components/boximgtext/boximgtext";
import Cardicon from "../../components/cardicon/cardicon";
import Cardnumbers from "../../components/cardnumbers/cardnumbers";
import Carousel from "../../components/carousel/carousel";
import Imagelist from "../../components/imagelist/imagelist";
import "./homeview.scss";
import Boxtexticonheading from "../../components/boxtexticonheading/boxtexticonheading";
import Boximgtextbottom from "../../components/boximgtextbottom/boximgtextbottom";
import Feedback from "../../components/feedback/feedback";

const homeview = () => {
  return (
    <Box overflow={"hidden"}>
      <Carousel />
      <Articleheader />
      <Cardicon />
      <Articleheader />
      <Cardnumbers/>
      <Articleheader />
      <Imagelist/>
      <Boximgtext/>
      <Articleheader />
      <Boxtexticonheading />
      <Boximgtextbottom/>
      <Feedback/>
      <Articleheader />
      <Imagelist/>
      <Boximgtext/>
    </Box>
  );
};

export default homeview;
