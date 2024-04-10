import { HiOutlineEmojiSad } from "react-icons/hi";
const NoSearchResults = () => {
  return (
    <div className="text-danger my-5 py-5 d-flex flex-column align-items-center">
      <HiOutlineEmojiSad className="no-results-icon" />
      <p className="h3 text-center">No results. Please try another search</p>
    </div>
  );
};
export default NoSearchResults;
