import { useLocation, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import { MyContext } from "../contexts/MyContext";
import ProductsList from "../components/ProductsList";
import ServiceList from "../components/ServiceList";
import Error from "../components/Error";
const ProductsPage = () => {
  const location = useLocation();
  const { setPathname } = useContext(MyContext);
  const [params] = useSearchParams();
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const { data: productsList, isLoading, error } = useGetProducts(type, value);
  useEffect(() => {
    window.scrollTo(0, 0);
    setPathname(location.pathname);
    const category = params.get("category");
    const brand = params.get("brand");
    const onSale = params.get("onSale");
    if (category) {
      setType("category");
      setValue(category);
    }
    if (brand) {
      setType("brand");
      setValue(brand);
    }
    if (onSale) {
      setType("onSale");
      setValue(onSale);
    }
  }, []);
  let list;
  if (isLoading) list = Array(8).fill(null);
  else list = productsList;
  return (
    <>
      <section className="p-0 p-md-5">
        {error ? (
          <Error error={error} />
        ) : (
          <ProductsList productList={list} loading={isLoading} />
        )}
        <ServiceList />
      </section>
    </>
  );
};
export default ProductsPage;
