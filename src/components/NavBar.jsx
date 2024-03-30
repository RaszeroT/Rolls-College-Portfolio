import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="header-nav">
      <ul>
        <li>
          <Link>About Me</Link>
        </li>
        <li>
          <Link>Athletics</Link>
        </li>
        <li>
          <Link>Work Experience</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
