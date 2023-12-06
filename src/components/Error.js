import { BiError } from "react-icons/bi";
const Error = ({ error }) => {
  return (
    <div className="d-flex justify-content-center align-items-center text-danger h3">
      <BiError style={{ marginRight: "0.3rem" }} />
      {error}
    </div>
  );
};
export default Error;
