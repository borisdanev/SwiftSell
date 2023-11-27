import Service from "./Service";
import Support from "../images/24_hours_support.png";
import Delivery from "../images/delivery.png";
import Security from "../images/security.png";
import Return from "../images/return.png";
const ServiceList = () => {
  return (
    <section className="services px-2 p-md-3 p-lg-5 my-5">
      <div className="container">
        <div className="row gx-5 gy-3">
          <div className="col-md-4">
            <Service
              text="Fast & Free Shipping"
              icon={<img src={Delivery} />}
            />
          </div>
          <div className="col-md-4">
            <div className="row gx-3">
              <div className="col-12">
                <Service
                  full={false}
                  icon={<img src={Support} />}
                  text="24/7 Customer Support"
                />
              </div>
              <div className="col-12 pt-3">
                <Service
                  full={false}
                  text="Easy Returns and Exchanges"
                  icon={<img src={Return} />}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Service
              text="Secure Payment System"
              icon={<img src={Security} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
