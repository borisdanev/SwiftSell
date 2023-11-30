import { useLocation, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import useSetProducts from "../hooks/useSetProducts";
import { MyContext } from "../contexts/MyContext";
import ProductsList from "../components/ProductsList";
import ServiceList from "../components/ServiceList";
const ProductsPage = ({ categories }) => {
  const location = useLocation();
  const { setPathname } = useContext(MyContext);
  const [params] = useSearchParams();
  const category = params.get("category");
  const query = params.get("query");
  const brandId = params.get("brandId");
  const [products, setProducts] = useState([]);
  const [length, setLength] = useState(30);
  const setCategoryProducts = useSetProducts(setProducts, setLength);
  const { productsList, isLoading } = useGetProducts(products, length, query);
  useEffect(() => {
    window.scrollTo(0, 0);
    setPathname(location.pathname);
  }, []);
  useEffect(() => {
    switch (category) {
      case "clothing": {
        const clothing = categories?.children[1]?.children[1];
        setCategoryProducts(clothing, [6, 19, 4, 5]);
        return;
      }
      case "accessories": {
        const accessories = categories?.children[2]?.children[2];
        setCategoryProducts(accessories, [3, 11, 13]);
        return;
      }
      case "footwear": {
        const footewear = categories?.children[3]?.children[1];
        setCategoryProducts(footewear, [3, 9, 4]);
        return;
      }
      case "sale": {
        const saleProducts = categories?.children[13]?.children[1];
        setCategoryProducts(saleProducts, [0], 20);
        return;
      }
    }
    const brand = categories?.children[5]?.children[1];
    setCategoryProducts(brand, [brandId], 30);
  }, [categories]);
  useEffect(() => {
    console.log(productsList);
  }, [productsList]);
  let list;
  if (isLoading) list = Array(8).fill(null);
  else list = productsList;
  return (
    <>
      <section className="p-0 p-md-5">
        <ProductsList productList={list} loading={isLoading} />
        <ServiceList />
      </section>
    </>
  );
};
export default ProductsPage;
