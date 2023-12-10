import { useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import ProductsList from "./ProductsList";
import Error from "./Error";
const NewProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { productsList, isLoading, error } = useGetProducts(products, 8);
  useEffect(() => {
    const newProducts = [
      category?.children[1]?.children[1]?.children[4],
      category?.children[1]?.children[1]?.children[7],
    ];
    setProducts(newProducts);
  }, [category]);
  let list;
  if (isLoading) list = Array(4).fill(null);
  else list = productsList;
  return (
    <section id="new-products">
      <div className="container">
        <p className="h2 text-success">New Products</p>
      </div>
      {error ? (
        <Error error={error} />
      ) : (
        <ProductsList productList={list} loading={isLoading} oneRow />
      )}
    </section>
  );
};
export default NewProducts;
