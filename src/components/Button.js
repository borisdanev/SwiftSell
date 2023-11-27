import { FaChevronRight } from "react-icons/fa";
import classNames from "classnames";
const Button = ({ children, className, chevron = true, onClick }) => {
  const btnClasses = classNames("btn", className);
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={`${chevron && "me-4"}`}>{children}</span>
      {chevron && <FaChevronRight />}
    </button>
  );
};
export default Button;
