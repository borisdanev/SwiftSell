import ProductsList from "./ProductsList";
import useGetProducts from "../hooks/useGetProducts";
import { useEffect, useState } from "react";
const NewProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { productsList, isLoading } = useGetProducts(products, 8);
  useEffect(() => {
    const newProducts = [
      category?.children[2]?.children[1]?.children[4],
      category?.children[2]?.children[1]?.children[7],
    ];
    setProducts(newProducts);
  }, [category]);
  useEffect(() => {}, [isLoading]);
  let list;
  if (isLoading) list = Array(4).fill(null);
  else list = productsList;
  return (
    <section id="new-products">
      <div className="container">
        <p className="h2 text-success">New Products</p>
      </div>
      <ProductsList productList={list} loading={isLoading} oneRow />
    </section>
  );
};
export default NewProducts;
