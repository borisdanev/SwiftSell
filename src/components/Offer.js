import Image from "../images/limited_offer.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <section id="sale" className="limited-offer px-1 py-4 p-md-3 p-lg-5">
      <div className="container p-0">
        <div className="row g-0">
          <div className="d-none d-md-block col-md-6 order-1 order-md-0">
            <img className="img-fluid rounded-start" src={Image} alt="offer" />
          </div>
          <div className="col-md-6 order-0 ">
            <div className="bg-dark py-5 px-4 h-100 rounded-end">
              <p className="h5 text-white">Limited offer</p>
              <p className="h1 text-white mb-4">
                Get up to 85% off. Shop now and enjoy before offer ends
              </p>
              <Link to="/products?category=sale">
                <Button className="btn-outline-light py-2 px-3">
                  Get it now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;
