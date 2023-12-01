const Brand = ({ src, name }) => {
  return (
    <div className="row brand p-2 py-3 rounded-3">
      <div className="col-3">
        <img src={src} className="img-fluid rounded-circle" alt="brand-logo" />
      </div>
      <div className="col-8">
        <p className="h5 mb-1">{name}</p>
        <p>Dilevery within 24 hours</p>
      </div>
    </div>
  );
};
export default Brand;
