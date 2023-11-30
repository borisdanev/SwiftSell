import { useContext, useEffect } from "react";
import { MyContext } from "../contexts/MyContext";
import { useLocation } from "react-router-dom";
import StartSlider from "../components/StartSlider";
import CategoriesList from "../components/CategoriesList";
import BestsellerList from "../components/BestsellersList";
import BrandList from "../components/BrandList";
import Offer from "../components/Offer";
import NewProducts from "../components/NewProducts";
import ServiceList from "../components/ServiceList";
const HomePage = ({ setInputValue, category }) => {
  const location = useLocation();
  const { setPathname } = useContext(MyContext);
  useEffect(() => {
    setInputValue("");
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
      <NewProducts category={category} />
      <BrandList />
      <Offer />
      <BestsellerList category={category} />
      <ServiceList />
    </>
  );
};
export default HomePage;
