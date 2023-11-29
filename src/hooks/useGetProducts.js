import getUrl from "./useGetUrl";
import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";
const useGetProducts = (products, length, query) => {
  const [productsList, setProductsList] = useState([]);
  const { fetchData, data, isLoading, error } = useFetchData();
  useEffect(() => {
    let urls = [];
    if (!query)
      urls = products.map((product) =>
        getUrl(product?.link?.categoryId, length, query)
      );
    else urls = [getUrl(undefined, length, query)];
    urls.forEach((url) => fetchData(url));
  }, [products, query, fetchData]);
  useEffect(() => {
    if (data?.itemCount) {
      if (query) setProductsList(data.products);
      else {
        if (productsList.length < length)
          setProductsList([...productsList, data.products].flat());
      }
    }
  }, [data]);
  return { isLoading, productsList };
};
export default useGetProducts;
