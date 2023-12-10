import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(MyContext);
  return (
    <div className="cart-icon fs-3 position-relative">
      <div className="position-relative">
        <Link className="text-dark" to="/cart">
          <FaCartPlus />
          <div
            style={{
              left: "1rem",
              fontSize: "0.7rem",
              height: "1.2rem",
              width: "1.2rem",
            }}
            className="position-absolute top-0 rounded-circle bg-danger
            d-flex align-items-center justify-content-center text-white"
          >
            {cart.length}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
