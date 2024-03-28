import { Link } from "react-router-dom";
import AddButton from "./AddButton";
const Product = ({ product, headerRef }) => {
  return (
    <div className="product pt-4 pb-3 pb-sm-5">
      <Link to={`/product?id=${product._id}`}>
        <img src={product.coverImg} className="img-fluid w-100" alt="product" />
      </Link>
      <div className="content">
        <Link className="text-dark" to={`/product?id=${product._id}`}>
          <div className="header d-flex flex-column" ref={headerRef}>
            <p className="title fs-5">{product.name}</p>
            {product.onSale ? (
              <div>
                <p className="text-secondary mb-0 text-decoration-line-through">
                  ${product.price}
                </p>
                {
                  <p className={`price fw-bold h5 text-danger`}>
                    ${product.salePrice}
                  </p>
                }
              </div>
            ) : (
              <p className="h5 fw-bold">${product.price.toFixed(2)}</p>
            )}
          </div>
        </Link>
        <AddButton
          product={product}
          classNames="rounded-pill btn-outline-dark"
        />
      </div>
    </div>
  );
};
export default Product;
