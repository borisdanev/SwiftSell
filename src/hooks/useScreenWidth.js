import { useState, useEffect } from "react";
const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [screenWidth]);
  return screenWidth;
};
export default useScreenWidth;
