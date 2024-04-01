import { useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetProductDetails = (id, setSelectedImage) => {
  const { data, isLoading, error, fetchData } = useFetchData();
  useEffect(() => {
    if (id && typeof id === "string")
      fetchData(`https://swiftsell-api.onrender.com/products?id=${id}`);
  }, [fetchData, id]);
  useEffect(() => {
    if (setSelectedImage && data) setSelectedImage(data.coverImg);
  }, [data, setSelectedImage]);
  return { data, isLoading, error };
};
export default useGetProductDetails;
