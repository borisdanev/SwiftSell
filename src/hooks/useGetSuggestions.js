import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetSuggestions = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: products, fetchData } = useFetchData();
  useEffect(() => {
    fetchData("https://swiftsell-api.onrender.com/products");
  }, [fetchData]);
  useEffect(() => {
    if (!products || products.length === 0) return;
    const suggestions = products
      .map((product) => ({ name: product.name, id: product._id }))
      .filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    if (suggestions.length > 10) setSuggestions(suggestions.slice(0, 10));
    else setSuggestions(suggestions);
  }, [query]);
  return suggestions;
};
export default useGetSuggestions;
