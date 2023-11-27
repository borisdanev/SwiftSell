import useGetProducts from "../hooks/useGetProducts";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
const BestsellerList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const { productsList, isLoading } = useGetProducts(products, 8);
  useEffect(() => {
    const bestSellers = [
      category?.children[4]?.children[1]?.children[0],
      category?.children[4]?.children[2]?.children[0],
    ];
    setProducts(bestSellers);
  }, [category]);
  let list;
  if (isLoading) list = Array(4).fill(null);
  else list = productsList;
  return (
    <section className="">
      <div className="container">
        <p className="h2 text-success">Bestsellers</p>
      </div>
      <ProductsList productList={list} loading={isLoading} oneRow />
    </section>
  );
};
export default BestsellerList;
