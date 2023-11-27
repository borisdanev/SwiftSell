import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
const useCart = () => {
  const { cart, setCart } = useContext(MyContext);
  const addToCart = (product) => {
    const updatedCart = [product, ...cart];
    if (cart.some((item) => item?.id === product?.id)) return;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item?.id !== product?.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const updateCart = (id, option) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: option };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const getCartProduct = (id) => {
    return cart.find((product) => product.id === id);
  };
  const getCartTotal = () =>
    cart.reduce((total, product) => {
      return total + product?.price?.current?.value * product?.quantity;
    }, 0);
  return {
    addToCart,
    removeFromCart,
    updateCart,
    getCartProduct,
    getCartTotal,
  };
};
export default useCart;
