import { useState } from "react";
import Button from "./Button";
import useCart from "../hooks/useCart";
import { IoMdCheckmark } from "react-icons/io";
const AddButton = ({ product, classNames }) => {
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart({ ...product, quantity: 1 });
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  return (
    <Button
      chevron={false}
      className={classNames + " position-relative"}
      onClick={handleClick}
    >
      Add To Cart
      <div
        className={`popup rounded-2 p-1 text-success ${
          clicked ? "visible" : ""
        }`}
      >
        <span className="text-success me-1">
          <IoMdCheckmark className="text-success" />
        </span>
        Successfully added!
      </div>
    </Button>
  );
};
export default AddButton;
