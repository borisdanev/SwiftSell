import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";
const Navlinks = ({ className }) => {
  const { pathname } = useContext(MyContext);
  const links = [
    {
      name: "Categories",
      target: "#categories",
    },
    { name: "Sale", target: "#sale" },
    {
      name: "Brands",
      target: "#brands",
    },
    { name: "New Products", target: "#new-products" },
  ];
  return (
    <>
      {links.map((item, i, arr) => (
        <li
          key={i}
          className={`${className} nav-item me-3 ${
            i !== arr.length - 1 ? "me-xl-5" : "flex-fill"
          } fs-5`}
        >
          {pathname === "/" || pathname === "" ? (
            <a style={{ color: "inherit" }} href={`${item.target}`}>
              {item.name}
            </a>
          ) : (
            <Link style={{ color: "inherit" }} to={`/${item.target}`}>
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};
export default Navlinks;
