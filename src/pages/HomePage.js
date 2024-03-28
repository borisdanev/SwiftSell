import { useContext, useEffect } from "react";
import { MyContext } from "../contexts/MyContext";
import { useLocation } from "react-router-dom";
import StartSlider from "../components/StartSlider";
import CategoriesList from "../components/CategoriesList";
import BrandList from "../components/BrandList";
import Offer from "../components/Offer";
import ServiceList from "../components/ServiceList";
import HeroProducts from "../components/HeroProducts";
const HomePage = () => {
  const location = useLocation();
  const { setPathname } = useContext(MyContext);
  useEffect(() => {
    setPathname(location.pathname);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <StartSlider />
      <CategoriesList />
      <HeroProducts startIndex={4} endIndex={8} title="New Products" />
      <BrandList />
      <Offer />
      <HeroProducts startIndex={0} endIndex={4} title="Bestsellers" />
      <ServiceList />
    </>
  );
};
export default HomePage;
