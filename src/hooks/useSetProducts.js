const useSetProducts = (setProducts, setLength) => {
  return (category, categoryProducts, length) => {
    const list = [];
    categoryProducts.forEach((item) => list.push(category?.children[item]));
    if (length) setLength(length);
    setProducts(list);
  };
};
export default useSetProducts;
