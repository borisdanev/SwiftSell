import { useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetCategory = () => {
  const url =
    "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US";
  const { data, loading, error, fetchData } = useFetchData(url);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return data?.navigation[0]?.children[4];
};
export default useGetCategory;
