import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import SkeletonLoader from "./SkeletonLoader";
import Pagination from "./Pagination";
const ProductsList = ({ productList, loading, oneRow, cart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const headerRefs = useRef([]);
  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = productList.slice(startIndex, endIndex);
  useEffect(() => {
    const headerHeights = headerRefs.current.map((ref) => ref?.offsetHeight);
    const tallestHeaderHeight = Math.max(...headerHeights);
    headerRefs?.current.forEach((ref) => {
      if (ref) ref.style.height = `${tallestHeaderHeight}px`;
    });
  }, [visibleProducts]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const totalPages = Math.ceil(productList.length / productsPerPage);
  return (
    <div className="container product-list">
      <div className={`row gy-4 ${oneRow ? "scroller" : ""}`}>
        {visibleProducts.map((item, i) => (
          <div key={i} className="col-6 col-lg-3">
            {loading ? (
              <SkeletonLoader height="450px" />
            ) : (
              <Product
                src={item?.imageUrl}
                title={item?.name}
                price={item?.price}
                isOutletPrice={item?.price.isOutletPrice}
                id={item?.id}
                product={item}
                cart={cart}
                headerRef={(el) => {
                  headerRefs.current[startIndex + i] = el;
                }}
              />
            )}
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};
export default ProductsList;
