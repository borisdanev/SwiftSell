const useGetUrl = (category, length, query) => {
  return `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0${
    query ? "&q=" + query : "&categoryId=" + category
  }&limit=${length}&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`;
};
export default useGetUrl;
