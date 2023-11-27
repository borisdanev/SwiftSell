import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";
const useGetSuggestions = (query) => {
  const url = `https://asos2.p.rapidapi.com/v2/auto-complete?q=${query}&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US`;
  const availableSuggestions = [
    "nike",
    "sneakers",
    "clothing",
    "accessories",
    "footwears",
    "jackets",
    "watchess",
    "shoes",
    "suits",
    "boots",
    "sunglasses",
  ];
  const [suggestions, setSuggestions] = useState([]);
  const { fetchData, data, isLoading, error } = useFetchData(url);
  useEffect(() => {
    if (
      availableSuggestions.includes(query) ||
      availableSuggestions.includes(query + "s")
    )
      fetchData();
    else setSuggestions([]);
  }, [query, fetchData]);
  useEffect(() => {
    if (!data) return;
    setSuggestions(data?.suggestionGroups[0]?.suggestions);
  }, [data]);
  return { suggestions, isLoading, error };
};
export default useGetSuggestions;
