import { Link } from "react-router-dom";
import DropdownNav from "./DropdownNav";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect to force page reload when device width changes - makes it so when mobile devices are rotated to wider mode changes for device width take effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth);
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <div id="header-nav">
      {window.innerWidth <= 740 ? (
        <DropdownNav />
      ) : (
        <ul>
          <li>
            <Link to={"/"}>About Me</Link>
          </li>
          <li>
            <Link to={"/track"}>Track</Link>
          </li>
          <li>
            <Link to={"/athletics"}>Athletics History</Link>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
