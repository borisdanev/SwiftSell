import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./contexts/MyContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useGetCategory from "./hooks/useGetCategory";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [pathname, setPathname] = useState("");
  const category = useGetCategory();
  return (
    <MyContext.Provider value={{ cart, setCart, pathname, setPathname }}>
      <div style={{ overflowX: "hidden" }}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setInputValue={setInputValue} category={category} />
            }
          ></Route>
          <Route
            path="/products"
            element={<ProductsPage categories={category} />}
          ></Route>
          <Route path="/product" element={<ProductDetailPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </MyContext.Provider>
  );
};
export default App;
