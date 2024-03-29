import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Slide from "./Slide";
import MenFashion from "../images/men_fashion.jpg";
import FitStyle from "../images/fit_style.jpg";
import ManWomanFashion from "../images/man_woman_fashion.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartSlider = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <button></button>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <HelmetProvider>
      <section className="start">
        <Helmet>
          <link rel="preload" as="image" href="../images/men_fashion.jpg" />
        </Helmet>
        <div className="container-fluid p-0">
          <Slider
            {...settings}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            <Slide
              src={MenFashion}
              text="Upgrade your closet with our premium quality fabrics and materials."
            />
            <Slide
              src={FitStyle}
              text={"Find your perfect fit with our range of sizes and styles."}
            />
            <Slide
              src={ManWomanFashion}
              text="Shop with us and get runway-inspired looks at affordable prices."
            />
          </Slider>
        </div>
      </section>
    </HelmetProvider>
  );
};
export default StartSlider;
