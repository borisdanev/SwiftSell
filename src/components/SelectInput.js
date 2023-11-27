import { useState } from "react";
import useCart from "../hooks/useCart";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const SelectInput = ({ options, message, scrollable, width, id }) => {
  const { getCartProduct, updateCart } = useCart();
  const product = getCartProduct(id);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options[0].displaySizeText || product.quantity
  );
  const handleClick = (option) => {
    setSelectedOption(option);
    updateCart(id, option);
    setIsOpen(false);
  };
  return (
    <div
      className="select-input position-relative"
      style={{ width, cursor: "pointer" }}
    >
      <p className="m-0 p-0 text-secondary">{message}</p>
      <div className="d-flex align-items-center border p-2">
        <input
          type="text"
          className="w-100 border-0"
          value={selectedOption}
          style={{ cursor: "inherit" }}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
        />
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <ul
          className={`list-unstyled border bg-white py-2 shadow-sm rounded-bottom 
          position-absolute top-100 start-0 end-0
          ${scrollable ? "scrollable " : ""}`}
          style={{ zIndex: 99 }}
        >
          {options.map((option) => (
            <li
              key={option.id || option}
              className="ps-2"
              onClick={() => handleClick(option.displaySizeText || option)}
            >
              {option.displaySizeText || option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SelectInput;
