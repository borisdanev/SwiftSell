import { FaArrowLeft } from "react-icons/fa";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};
export default PrevArrow;
