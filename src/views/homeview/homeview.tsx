import Articleheader from "../../components/articleheader/articleheader";
import Cardicon from "../../components/cardicon/cardicon";
import Cardnumbers from "../../components/cardnumbers/cardnumbers";
import Carousel from "../../components/carousel/carousel";
import "./homeview.scss";

const homeview = () => {
  return (
    <>
      <Carousel />
      <Articleheader />
      <Cardicon />
      <Articleheader />
      <Cardnumbers/>
      <Articleheader />
    </>
  );
};

export default homeview;
