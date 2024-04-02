import { Link } from "react-router-dom";
import DropdownNav from "./DropdownNav";

const NavBar = () => {
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
