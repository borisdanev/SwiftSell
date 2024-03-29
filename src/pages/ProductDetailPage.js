import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useGetProductDetails from "../hooks/useGetProductDetails";
import useScreenWidth from "../hooks/useScreenWidth";
import { MyContext } from "../contexts/MyContext";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import ConditionalLoader from "../components/ConditionalLoader";
import Delivery from "../images/delivery.png";
import Return from "../images/return.png";
import AddButton from "../components/AddButton";
const ProductDetailPage = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const { setPathname } = useContext(MyContext);
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState("");
  const { data, isLoading } = useGetProductDetails(id, setSelectedImage);
  const screenWidth = useScreenWidth();
  useEffect(() => {
    window.scrollTo(0, 0);
    setPathname(location.pathname);
  }, []);
  return (
    <>
      <section className="p-0 p-md-5 product-page">
        <div className="container-sm">
          <div className="row gx-5">
            <div className="col-md-6 images-container pe-md-5">
              <ConditionalLoader isLoading={isLoading} height="500px">
                <img
                  className="img-fluid mb-3 w-100"
                  src={`${selectedImage}`}
                  alt="selected product"
                />
              </ConditionalLoader>
              {screenWidth > 768 && (
                <div className="row">
                  {data?.images?.map((url, i) => (
                    <div
                      key={i}
                      className={`col-md-6 col-lg-3 ${isLoading ? "pt-3" : ""}`}
                    >
                      <ConditionalLoader isLoading={isLoading} height="190px">
                        <img
                          className="img-fluid w-100"
                          src={`${url}`}
                          onClick={() => setSelectedImage(url)}
                          alt="product"
                        />
                      </ConditionalLoader>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-6">
              <div>
                <ConditionalLoader isLoading={isLoading} height="40px">
                  <p className="h2">{data?.name}</p>
                </ConditionalLoader>
              </div>
              <div className="my-4">
                <ConditionalLoader
                  isLoading={isLoading}
                  height="33px"
                  width="60px"
                >
                  <p className="price h3">${data?.price}</p>
                </ConditionalLoader>
              </div>
              <div className="d-flex align-items-center my-4">
                <span className="h5 m-0 me-3">Color:</span>
                <span className="h5 m-0">{data.color}</span>
              </div>
              <div className="h5 my-4">
                <ConditionalLoader
                  isLoading={isLoading}
                  height="30px"
                  width="60px"
                >
                  <p className="d-inline-block me-2 my-2">Size:</p>
                </ConditionalLoader>
                {data?.sizes?.length > 1 ? (
                  <ConditionalLoader isLoading={isLoading} height="30px">
                    <SelectInput
                      options={data?.sizes}
                      initialValue={data?.sizes[0]}
                      message="Select Size"
                      width="50%"
                    />
                  </ConditionalLoader>
                ) : (
                  <ConditionalLoader isLoading={isLoading} height="2rem">
                    <span className="text-secondary">{"One Size"}</span>
                  </ConditionalLoader>
                )}
              </div>
              <div className="mt-5">
                <ConditionalLoader
                  isLoading={isLoading}
                  height="2.5rem"
                  width="10rem"
                  className="rounded-pill d-inline-block"
                >
                  <Button
                    className="btn-success rounded-pill me-3 my-2 px-5 py-2 mb-sm-0 mb-md-3 mb-lg-0"
                    chevron={false}
                  >
                    Buy Now
                  </Button>
                </ConditionalLoader>
                <ConditionalLoader
                  isLoading={isLoading}
                  height="2.5rem"
                  width="10rem"
                  className="rounded-pill d-inline-block ms-3"
                >
                  <AddButton
                    product={data}
                    classNames="btn btn-outline-success rounded-pill px-5 py-2 my-2 my-sm-0"
                  />
                </ConditionalLoader>
              </div>
              <div className="delivery my-5 w-50">
                {[
                  { text: "Free Delivery", src: Delivery },
                  { text: "Free Return", src: Return },
                ].map((item, i) => (
                  <ConditionalLoader key={i}>
                    <div
                      className={`p-3 bg-light ${i === 1 ? "border-top" : ""}`}
                    >
                      <img
                        src={item.src}
                        className="icon me-3"
                        alt="service icon"
                      />
                      <span>{item.text}</span>
                    </div>
                  </ConditionalLoader>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetailPage;
