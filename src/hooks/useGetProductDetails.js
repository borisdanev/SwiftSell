import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";
const useGetProductDetails = (id, clicked, setSelectedImage) => {
  const url = `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
  const { fetchData, data, isLoading, error } = useFetchData(url);
  useEffect(() => {
    if (!clicked) return;
    fetchData();
  }, [id, clicked, fetchData]);
  useEffect(() => {
    if (setSelectedImage && data) setSelectedImage(data.media.images[0].url);
  }, [data]);
  return { data, isLoading };
};
export default useGetProductDetails;
