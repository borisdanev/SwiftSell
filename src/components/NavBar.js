import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import useScreenWidth from "../hooks/useScreenWidth";
import Hamburger from "hamburger-react";
import SideBar from "./SideBar";
import Navlinks from "./Navlinks";
const NavBar = () => {
  const screenWidth = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-3 nav-bar bg-white">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-4 col-md-3 col-lg-1 d-flex align-items-center">
            {screenWidth < 991 && (
              <span
                style={{ position: isOpen && "fixed", top: isOpen && "0.8rem" }}
                className="burger-menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Hamburger
                  label="burger menu"
                  toggled={isOpen}
                  className={`something"}`}
                  color={`${isOpen ? "#FFFFFF" : "#000000"}`}
                />
              </span>
            )}
            <Link to="/" className="ps-3 ps-lg-0">
              <p className="h4 text-success">SwiftSell</p>
            </Link>
          </div>
          {screenWidth > 991 && (
            <div className="col-md-6 p-0 ps-5">
              <ul
                style={{ color: "black !imporant" }}
                className="navbar-nav text-dark flex-row list-unstyled"
              >
                <Navlinks />
              </ul>
            </div>
          )}
          <div className="col-8 ps-5 col-lg-5 d-flex justify-content-md-start justify-content-end">
            <SearchBar />
            <Cart />
          </div>
        </div>
      </div>
      {screenWidth < 992 && <SideBar isOpen={isOpen} />}
    </nav>
  );
};
export default NavBar;
