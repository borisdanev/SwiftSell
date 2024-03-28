import { useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import ProductsList from "./ProductsList";
import Error from "./Error";
const HeroProducts = ({ startIndex, endIndex, title }) => {
  const [products, setProducts] = useState([]);
  const {
    data: clothingProducts,
    isLoading: isLoadingClothing,
    error: clothingError,
  } = useGetProducts("category", "clothing");
  const {
    data: footwearProducts,
    isLoading: isLoadingFootwear,
    error: footWearError,
  } = useGetProducts("category", "footwear");
  useEffect(() => {
    if (clothingProducts && footwearProducts)
      setProducts([
        ...clothingProducts.slice(startIndex, endIndex),
        ...footwearProducts.slice(startIndex, endIndex),
      ]);
  }, [clothingProducts, footwearProducts]);
  let list;
  if (isLoadingClothing || isLoadingFootwear) list = Array(4).fill(null);
  else list = products;
  return (
    <section>
      <div className="container">
        <p className="h2 text-success">{title}</p>
      </div>
      {clothingError || footWearError ? (
        <Error error={clothingError} />
      ) : (
        <ProductsList
          productList={list}
          loading={isLoadingClothing || isLoadingFootwear}
          oneRow
        />
      )}
    </section>
  );
};
export default HeroProducts;
