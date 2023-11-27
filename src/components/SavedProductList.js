import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import useCart from "../hooks/useCart";
import SavedProduct from "./SavedProduct";
const SavedProductList = () => {
  const { cart } = useContext(MyContext);
  const { getCartTotal } = useCart();
  return (
    <div className="bg-white">
      <ul className="saved-products list-unstyled">
        {cart.map((item, i) => (
          <li
            key={item?.id || i}
            className={`${i < cart.length - 1 ? "border-bottom" : ""}`}
          >
            <SavedProduct
              product={item}
              img={item?.media?.images[0]?.url}
              name={item?.name}
              price={item?.price}
              isOutletPrice={item?.isOutletPrice}
            />
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="d-flex px-3 h5 border-top pt-3">
          <p className="pe-3">Sub-total:</p>
          <p>{`$${getCartTotal().toFixed(2)}`}</p>
        </div>
      )}
    </div>
  );
};
export default SavedProductList;
