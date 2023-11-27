import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useScreenWidth from "../hooks/useScreenWidth";
const Cart = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="cart-icon fs-3 position-relative">
      <div>
        <Link className="text-dark" to="/cart">
          <FaCartPlus />
          {screenWidth > 768 && <span className="ms-2">Cart</span>}
        </Link>
      </div>
    </div>
  );
};
export default Cart;
