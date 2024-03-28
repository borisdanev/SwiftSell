import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
const useCart = () => {
  const { cart, setCart } = useContext(MyContext);
  const addToCart = (product) => {
    const updatedCart = [product, ...cart];
    if (cart.some((item) => item._id === product._id)) return;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item?._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const updateCart = (id, option) => {
    const updatedCart = cart.map((product) => {
      if (product._id === id) return { ...product, quantity: option };
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
      return total + product.price * product.quantity;
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
