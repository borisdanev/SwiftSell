import { useCallback, useState } from "react";
const keys = [
  "e4bb5e8b98msh11bbe8e3436b6bdp177755jsn371bb4f3c0da",
  "306746f5e5mshcd20fb9a9a66d82p13da3ejsn3e0b8ff9a29a",
  "c770ccc755msh6e02246001cbd63p15cd3djsne10879b50486",
  "742a0f9453msh3485f2c5c773787p14b320jsn915ba24bc924",
  "05af4455aamshc28fa602c8aa46ap1e663cjsn048569db156c",
  "f053ecf726msh9a02edc79a31796p18ef39jsnf7d624b40736",
  "e945ffd961msh5218c71932331c2p1e8be1jsn02c78c91a254",
  "088057eebfmsh60fe870e73fc82ap1cf1ccjsn526efa1d0f6b",
  "464dfbedc2mshfa34e6291274bf3p110264jsn2136c8c250a7",
];
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentKey, setCurrentKey] = useState(0);
  const fetchData = useCallback(
    async (innerUrl = url) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": keys[currentKey],
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(innerUrl, options);
        if (!response.ok) {
          if (response.status === 429) {
            throw new Error("error");
          }
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        const currentKeyIndex = (currentKey + 1) % keys.length;
        setCurrentKey(currentKeyIndex);
        setError(err);
        setIsLoading(false);
      }
    },
    [url, currentKey]
  );
  return { data, isLoading, error, fetchData, setData, setIsLoading };
};

export default useFetchData;
