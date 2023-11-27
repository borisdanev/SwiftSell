import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import PayPal from "../images/paypal.png";
import Visa from "../images/visa.png";
import Stripe from "../images/stripe.png";
import iPay from "../images/apple-pay.png";
const Footer = () => {
  return (
    <footer className="footer p-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="h4 text-success">SwiftSell</p>
            <p className="desc text-secondary">
              We offer stylish, high-quality fashion products for your wardrobe,
              including clothing, shoes, and accessories.
            </p>
            <div className="social-media mb-4 mb-lg-0">
              {[<FaInstagram />, <FaFacebook />, <FaTwitter />].map(
                (item, i) => (
                  <span key={i} className="me-3">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="col-md-4 col-lg-2 text-center text-md-start">
            <p className="h5">Our Company</p>
            <ul className="list-unstyled text-secondary">
              {["About Us", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 text-center text-md-start">
            <p className="h5">Support</p>
            <ul className="list-unstyled text-secondary">
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Return Policy</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 text-center text-md-start">
            <p className="h5">Accepted Payments</p>
            <div className="d-flex payments justify-content-center justify-content-md-start">
              {[Visa, PayPal, Stripe, iPay].map((item) => (
                <img key={item} src={item} className="img-fluid me-3" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
