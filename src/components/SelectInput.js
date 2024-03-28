import { useState } from "react";
import useCart from "../hooks/useCart";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const SelectInput = ({
  options,
  initialValue,
  message,
  scrollable,
  width,
  id,
}) => {
  const { updateCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue);
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
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SelectInput;
