import { useContext, useEffect } from "react";
import { MyContext } from "../contexts/MyContext";
import { useLocation } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaCartPlus } from "react-icons/fa";
import SavedProductList from "../components/SavedProductList";
import Button from "../components/Button";
import PayPal from "../images/paypal.png";
import Visa from "../images/visa.png";
import Stripe from "../images/stripe.png";
import iPay from "../images/apple-pay.png";
const CartPage = () => {
  const { cart } = useContext(MyContext);
  const location = useLocation();
  const { setPathname } = useContext(MyContext);
  const { getCartTotal } = useCart();
  useEffect(() => {
    document.body.classList.add("bg-light");
    setPathname(location.pathname);
    return () => document.body.classList.remove("bg-light");
  }, []);
  return (
    <section className="p-1 p-lg-5 cart">
      <div className="container-lg">
        {cart.length > 0 ? (
          <div className="row">
            <div className="col-md-7 ps-lg-5">
              <div className="shadow ms-lg-5">
                <SavedProductList />
              </div>
            </div>

            <div className="col-md-5 ps-md-4 pe-lg-5">
              <div className="bg-white px-5 py-4 shadow">
                <p className="h4 mb-4">Total</p>
                <div className="d-flex justify-content-between align-items-center h5">
                  <p>Sub-total</p>
                  <p>{`$${getCartTotal().toFixed(2)}`}</p>
                </div>
                <Button
                  chevron={false}
                  className="btn-success w-100 p-2 mt-4 mb-5"
                >
                  Checkout
                </Button>
                <p className="h5">We Accept:</p>
                <div className="d-flex payments">
                  {[Visa, PayPal, Stripe, iPay].map((src) => (
                    <img
                      key={src}
                      src={src}
                      className="img-fluid me-2"
                      alt="paymets service logo"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center h2 my-5 py-5">
            <FaCartPlus />
            <p className="mt-4">Your cart is empty</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default CartPage;
