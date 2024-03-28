import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetSuggestions = (query) => {
  const initalSuggestions = [
    "Nike",
    "Adidas",
    "Shoes",
    "Boots",
    "Hoodie",
    "River Island",
  ];
  const [suggestions, setSuggestions] = useState([]);
  const { data: products, isLoading, fetchData } = useFetchData();
  useEffect(() => {
    fetchData("https://testapi-2ds0.onrender.com/products");
  }, [fetchData]);
  useEffect(() => {
    if (!products) return;
    // if (!query) {
    //   setSuggestions(initalSuggestions);
    //   return;
    // }
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
