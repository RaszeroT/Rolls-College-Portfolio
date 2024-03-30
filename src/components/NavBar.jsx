import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="header-nav">
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
          <Link to={"/workexperience"}>Work Experience</Link>
        </li>
        <li>
          <Link to={"/resume"}>Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
