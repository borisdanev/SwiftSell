import { Link } from "react-router-dom";
import AddButton from "./AddButton";
const Product = ({ src, title, price, isOutletPrice, id, headerRef }) => {
  return (
    <div className="product pt-4 pb-3 pb-sm-5">
      <Link to={`/product?id=${id}`}>
        <img src={`https://${src}`} className="img-fluid w-100" alt="product" />
      </Link>
      <div className="content">
        <Link className="text-dark" to={`/product?id=${id}`}>
          <div
            className="header d-flex justify-content-between"
            ref={headerRef}
          >
            <p className="title fs-5">{title}</p>
            <div>
              <p className="text-secondary mb-0 text-decoration-line-through">
                {price?.rrp.text}
              </p>
              <p
                className={`price fw-bold fs-5 ${
                  isOutletPrice ? "text-danger" : ""
                }`}
              >
                {price?.current.text}
              </p>
            </div>
          </div>
        </Link>
        <AddButton
          detailed={false}
          product={id}
          classNames="rounded-pill btn-outline-dark"
        />
      </div>
    </div>
  );
};
export default Product;
