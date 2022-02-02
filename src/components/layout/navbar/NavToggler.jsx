import React from "react";
import { useSpring, animated, config } from "react-spring";

function BurgerCross(props) {
  const { isCross } = props;
  const { stage } = useSpring({
    stage: isCross ? 0 : 100,
    config: config.gentle,
  });

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 7.9374998 7.9375002"
      version="1.1"
      id="svg8"
    >
      <animated.path
        className="menu-svg-path"
        d={stage.to({
          range: [0, 50, 100],
          output: [
            "M 3.96875,3.96875 H 3.96875",
            "M 2.3812502,3.96875 H 5.55625",
            "M 0.52916667,3.96875 H 7.14375",
          ],
        })}
      />
      <animated.path
        className="menu-svg-path"
        d={stage.to({
          range: [0, 50, 100],
          output: [
            "m 0.7937494,0.79375 c 0,0 1.3229173,1.3229167 3.1750006,3.175 1.8520833,-1.8520833 3.175,-3.175 3.175,-3.175",
            "m 0.7937494,0.79375 c 0,0 1.0583333,1.5875 3.1750001,1.5875 2.1166667,0 3.1750005,-1.5875 3.1750005,-1.5875",
            "m 0.7937494,0.79375 c 0,0 0.2645839,0 3.1750006,0 2.9104167,0 3.175,0 3.175,0",
          ],
        })}
      />
      <animated.path
        className="menu-svg-path"
        d={stage.to({
          range: [0, 50, 100],
          output: [
            "m 0.7937494,7.14375 c 0,0 1.3229173,-1.3229167 3.1750006,-3.175 1.8520833,1.8520833 3.175,3.175 3.175,3.175",
            "m 0.79375009,7.14375 c 0,0 1.05833331,-1.5875 3.17500001,-1.5875 2.1166666,0 3.1749999,1.5875 3.1749999,1.5875",
            "m 0.79375009,7.14375 c 0,0 0.26458321,0 3.17499991,0 2.9104167,0 3.175,0 3.175,0",
          ],
        })}
      />
    </svg>
  );
}

function NavToggler(props) {
  const { open, onClick } = props;

  const icon = <BurgerCross isCross={open} />;

  return (
    <div className="flex md:hidden order-first col-span-1 items-center">
      <button
        id="navbar-trigger"
        onClick={onClick}
        className={"navbar-icon transition-colors text-white"}
      >
        {icon}
      </button>
    </div>
  );
}

export default NavToggler;
