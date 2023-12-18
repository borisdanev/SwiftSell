import { Link } from "react-router-dom";
import Brand from "./Brand";
import Nike from "../images/nike.jpg";
import NorthFace from "../images/north_face.png";
import JackJones from "../images/jack_jones.jpg";
import TommyHilfiger from "../images/tommy_hilfiger.png";
import PullBear from "../images/pullbear_logo.jpg";
import RiverIsland from "../images/river_island.jpg";
import OnlyAndSons from "../images/only_and_sons.jpg";
import Adidas from "../images/adidas.jpg";
import useScreenWidth from "../hooks/useScreenWidth";
const BrandList = () => {
  const screenWidth = useScreenWidth();
  const brands = [
    { id: 1, name: "Nike", imageUrl: Nike },
    { id: 5, name: "North Face", imageUrl: NorthFace },
    { id: 9, name: "Jack & Jones", imageUrl: JackJones },
    { id: 6, name: "Tommy Hilfiger", imageUrl: TommyHilfiger },
    { id: 4, name: "Pull & Bear", imageUrl: PullBear },
    { id: 8, name: "River Island", imageUrl: RiverIsland },
    { id: 11, name: "Only & Sons", imageUrl: OnlyAndSons },
    { id: 3, name: "Adidas", imageUrl: Adidas },
  ];
  return (
    <section id="brands" className="brands px-2 py-4 p-sm-3 p-lg-5">
      <div className="container">
        <p className="h2 mb-3 mb-md-5">Brands</p>
        <div
          className={`row gx-5 pb-5 gy-4 ${
            screenWidth < 920 ? "scroller" : ""
          }`}
        >
          {screenWidth > 920
            ? brands.map((item) => (
                <div key={item.id} className="col-md-6 col-xl-3">
                  <Link
                    to={`/products?brandId=${item.id}`}
                    className="text-dark"
                  >
                    <Brand src={item.imageUrl} name={item.name} />
                  </Link>
                </div>
              ))
            : [brands.slice(0, 4), brands.slice(4)].map((arr, i) => (
                <div key={i} className="col-12">
                  <div className="row g-3 g-md-5">
                    {arr.map((item) => (
                      <div key={item.id} className="col-md-6 col-xl-3">
                        <Link
                          className="text-dark"
                          to={`/products?brandId=${item.id}`}
                        >
                          <Brand src={item.imageUrl} name={item.name} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};
export default BrandList;
