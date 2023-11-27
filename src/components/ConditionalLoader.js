import SkeletonLoader from "./SkeletonLoader";
const ConditionalLoader = ({
  children,
  isLoading,
  height,
  width,
  className,
}) => {
  return (
    <>
      {isLoading ? (
        <SkeletonLoader height={height} width={width} className={className} />
      ) : (
        children
      )}
    </>
  );
};
export default ConditionalLoader;
