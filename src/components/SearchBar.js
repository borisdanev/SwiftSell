import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetSuggestions from "../hooks/useGetSuggestions";
import { FaSearch } from "react-icons/fa";
import SkeletonLoader from "./SkeletonLoader";
import useScreenWidth from "../hooks/useScreenWidth";
import { AiOutlineClose } from "react-icons/ai";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [visibleSuggestions, setVisibleSuggestions] = useState(false);
  const [suggestionsClicked, setSuggestionsClicked] = useState(false);
  const suggestions = useGetSuggestions(value);
  const isLoading = false;
  const [clicked, setClicked] = useState(false);
  const screenWidth = useScreenWidth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (product) => {
    setValue(product.name);
    setVisibleSuggestions(false);
    setClicked(false);
    navigate(`/product?id=${product.id}`);
  };
  const handleInputFocus = () => {
    setVisibleSuggestions(true);
  };
  const handleInputBlur = () => {
    setTimeout(() => {
      if (!suggestionsClicked) {
        setVisibleSuggestions(false);
      }
    }, 100);
  };
  const handleSuggestionClick = () => setSuggestionsClicked(true);
  return (
    <div
      className={`search-bar ${
        clicked && screenWidth < 768 ? "position-fixed" : ""
      }`}
    >
      {clicked && screenWidth < 768 && (
        <AiOutlineClose
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          onClick={() => setClicked(false)}
        />
      )}
      {(screenWidth > 768 || clicked) && (
        <form
          className={`border d-flex align-items-center py-2 px-3 rounded-pill border-0 bg-light position-relative`}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(value);
          }}
        >
          <FaSearch />
          <input
            value={value}
            className="border-0 w-100 ms-3 outline-none bg-light"
            placeholder="Search Product"
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {visibleSuggestions && (
            <ul className="suggestions-container position-absolute list-unstyled">
              {isLoading
                ? Array(10)
                    .fill(null)
                    .map((_, i) => (
                      <li key={i} className="suggestion mt-2">
                        <SkeletonLoader height="30px" />
                      </li>
                    ))
                : suggestions.map((item, i) => (
                    <li
                      key={i}
                      className="suggestion p-2 d-flex justify-content-between align-items-center"
                      onClick={() => {
                        handleSuggestionClick();
                        handleSubmit(item);
                      }}
                    >
                      <p className="m-0">
                        {typeof item === "string" ? item : item.name}
                      </p>
                      <p className="m-0  text-secondary">
                        {suggestions.length}
                      </p>
                    </li>
                  ))}
            </ul>
          )}
        </form>
      )}
      {screenWidth < 768 && !clicked && (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setClicked(!clicked)}
        >
          <FaSearch />
        </span>
      )}
    </div>
  );
};
export default SearchBar;
