import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Slide from "./Slide";
import MenFashion from "../images/men_fashion.webp";
import FitStyle from "../images/fit_style.webp";
import ManWomanFashion from "../images/man_woman_fashion.webp";
import { Helmet, HelmetProvider } from "react-helmet-async";
const StartSlider = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <button aria-label="Slice navigation"></button>,
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
          <link rel="preload" as="image" href={MenFashion}></link>
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
