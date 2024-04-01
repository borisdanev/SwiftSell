import useCart from "../hooks/useCart";
import SelectInput from "./SelectInput";
import { GrClose } from "react-icons/gr";
const SavedProduct = ({ product }) => {
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
        onClick={() => removeFromCart(product?._id)}
      >
        <GrClose style={{ cursor: "pointer" }} />
      </span>
      <div className="col-lg-3">
        <img
          src={product?.coverImg}
          className="product-img img-fluid"
          alt="product "
        />
      </div>
      <div className="col-lg-8">
        <div className="d-flex justify-content-between align-items-start">
          {product?.onSale ? (
            <div>
              <p className="text-secondary h6 mb-0 text-decoration-line-through">
                ${product?.price.toFixed(2)}
              </p>
              <p className={`price fw-bold text-danger h5`}>
                ${product?.salePrice.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="h5">${product?.price?.toFixed(2)}</p>
          )}
        </div>
        <p className="text-secondary fs-4">{product?.name}</p>
        <div className="row">
          <div className="col-md-2 d-flex pt-2">
            <span>{product?.color}</span>
          </div>
          <div className="col-md-5">
            {product.sizes && (
              <SelectInput
                options={
                  product.sizes.length > 1 ? product.sizes : ["One Size"]
                }
                initialValue={
                  product.sizes.length > 1 ? product.sizes[0] : "One Size"
                }
                message="Size"
                scrollable={product.sizes.length > 6}
              />
            )}
          </div>
          <div className="col-md-5">
            {product._id && (
              <SelectInput
                options={Array.from({ length: 10 }, (_, i) => i + 1)}
                initialValue={product.quantity}
                message="Qty"
                id={product._id}
                scrollable
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavedProduct;
