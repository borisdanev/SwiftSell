import { useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetProductDetails = (id, setSelectedImage) => {
  const { data, isLoading, error, fetchData } = useFetchData();
  useEffect(() => {
    if (typeof id === "string")
      fetchData(`https://testapi-2ds0.onrender.com/products?id=${id}`);
  }, [fetchData, id]);
  useEffect(() => {
    if (setSelectedImage && data) setSelectedImage(data.coverImg);
  }, [data, setSelectedImage]);
  return { data, isLoading };
};
export default useGetProductDetails;
