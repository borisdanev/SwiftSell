import { useSpring, animated } from "react-spring";
import Navlinks from "./Navlinks";
const SideBar = ({ isOpen }) => {
  const parentSpring = useSpring({
    maxWidth: isOpen ? 1000 : 0,
    height: "100vh",
  });

  const opacitySpring = useSpring({
    opacity: isOpen ? 1 : 0,
    delay: 100,
  });

  return (
    <animated.div
      className="side-bar d-flex justify-content-between flex-column position-fixed top-0 bottom-0 start-0 pt-5 pb-5 bg-dark text-white"
      style={parentSpring}
    >
      <animated.div className="ms-3">
        <animated.p style={opacitySpring} className="text-success h4 mt-3 ">
          Swiftsell
        </animated.p>
        <animated.ul
          className="list-unstyled h5 text-white mt-3 "
          style={opacitySpring}
        >
          <Navlinks className="mb-3" />
        </animated.ul>
      </animated.div>
    </animated.div>
  );
};
export default SideBar;
