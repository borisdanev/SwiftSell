import classNames from "classnames";
const SkeletonLoader = ({ height, width, className }) => {
  const classes = classNames(`loader-container ${className}`);
  return (
    <div className={classes} style={{ height, width }}>
      <div className="loader"></div>
    </div>
  );
};
export default SkeletonLoader;
