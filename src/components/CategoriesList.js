import { useNavigate } from "react-router-dom";
import Clothing from "../images/clothing.jpg";
import Accessories from "../images/accessories.jpg";
import FootWear from "../images/footwear.jpg";
const Categories = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/products?category=${category}`);
  };
  return (
    <section id="categories" className="categories p-0 p-sm-3 p-lg-5 my-5">
      <div className="container">
        <p className="h2 mb-5 text-success">Select Category</p>
        <div className="row position-relative">
          <div
            className="col-md-6 child position-relative p-0"
            onClick={() => handleClick("clothing")}
          >
            <img src={Clothing} className="img-fluid h-100" />
            <p
              className="position-absolute text-white h2 top-50 start-50 translate-middle"
              style={{ cursor: "pointer" }}
            >
              Clothing
            </p>
          </div>
          <div className="col-md-6 child p-0">
            <div className="row h-100">
              {[
                { category: "accessories", img: Accessories },
                { category: "footwear", img: FootWear },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`col-12 h-50 position-relative ${
                    i === 1 ? "pt-3" : ""
                  }`}
                  onClick={() => handleClick(item.category)}
                >
                  <img src={item.img} className="img-fluid" />
                  <p
                    className="position-absolute text-white h2 top-50 start-50 translate-middle"
                    style={{ cursor: "pointer" }}
                  >
                    {item.category.split("")[0].toUpperCase() +
                      item.category.split("").slice(1).join("")}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-circle position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center bg-dark">
            <p className="fs-3 m-0 text-white text-center">Fit Yourself</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;
