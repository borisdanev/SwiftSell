import Button from "./Button";
const Slide = ({ src, text }) => {
  return (
    <div className="slide position-relative ">
      <p className="h1 display-3 text-center position-absolute text-white  start-50 translate-middle">
        {text}
      </p>
      <Button className="btn-outline-light position-absolute start-50 translate-middle py-2 px-3 fs-5">
        Go Shopping
      </Button>
      <div className="layer "></div>
      <img className="img-fluid" src={src} />
    </div>
  );
};
export default Slide;
