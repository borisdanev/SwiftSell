import useCart from "../hooks/useCart";
import SelectInput from "./SelectInput";
import { GrClose } from "react-icons/gr";
const SavedProduct = ({ product, name, img, price, isOutletPrice }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="saved-product row p-3 pe-0 position-relative">
      <span
        className="fw-bold fs-4"
        style={{
          position: "absolute",
          top: "15px",
          right: "2rem",
          width: "0.5rem",
        }}
        onClick={() => removeFromCart(product)}
      >
        <GrClose style={{ cursor: "pointer" }} />
      </span>
      <div className="col-lg-3">
        <img src={`http://${img}`} className="product-img img-fluid" />
      </div>
      <div className="col-lg-8">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="text-secondary fs-4 mb-0 text-decoration-line-through">
              {price?.rrp.text}
            </p>
            <p
              className={`price fw-bold ${isOutletPrice ? "text-danger" : ""}`}
            >
              {price?.current.text}
            </p>
          </div>
        </div>
        <p className="text-secondary fs-4">{name}</p>
        <div className="row">
          <div className="col-md-2 d-flex pt-2">
            <span>{product?.variants[0]?.colour.toLowerCase()}</span>
          </div>
          <div className="col-md-5">
            <SelectInput
              options={product.variants}
              message="Size"
              scrollable={product.variants.length > 6}
            />
          </div>
          <div className="col-md-5">
            <SelectInput
              options={Array.from({ length: 10 }, (_, i) => i + 1)}
              message="Qty"
              id={product.id}
              scrollable
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavedProduct;
