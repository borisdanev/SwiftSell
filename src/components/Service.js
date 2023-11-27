const Service = ({ full = true, icon, text }) => {
  return (
    <div className="row bg-light h-100 text-center d-flex justify-content-center p-3">
      <div
        className={`col-md-1 icon-container rounded-circle ${
          full && "align-self-end mb-3"
        }`}
      >
        {icon}
      </div>
      <div className={` ${full ? "col-md-12" : "col-md-6"}`}>
        <span className="secondary-text">{text}</span>
      </div>
    </div>
  );
};
export default Service;
