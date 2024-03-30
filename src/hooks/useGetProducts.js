import { useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetProducts = (type, value) => {
  const { data, isLoading, error, fetchData } = useFetchData();
  useEffect(() => {
    if (!type || !value) return;
    fetchData(`https://swiftsell-api.onrender.com/products?${type}=${value}`);
  }, [fetchData, type, value]);
  return { isLoading, data, error };
};
export default useGetProducts;
