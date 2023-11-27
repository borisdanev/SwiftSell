import { useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetSimilarProducts = () => {
  const url =
    "https://asos2.p.rapidapi.com/products/v3/list-similarities?id=200889605&store=US&sizeSchema=US&currency=USD&lang=en-US";
  const { fetchData, data, isLoading, error } = useFetchData();
  useEffect(() => {
    fetchData(async () => {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    });
  });
  return { data, isLoading, error };
};
export default useGetSimilarProducts;
