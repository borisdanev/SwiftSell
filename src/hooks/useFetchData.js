import { useCallback, useState } from "react";
const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback((url) => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return { data, isLoading, error, fetchData };
};

export default useFetchData;
