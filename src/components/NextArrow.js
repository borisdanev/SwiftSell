import { FaArrowRight } from "react-icons/fa";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};
export default NextArrow;
