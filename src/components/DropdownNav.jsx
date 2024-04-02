import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DropdownNav = () => {
  // set useState
  const [isDropdownActive, setDropdownActive] = useState(false);
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

  // makes menu button dropdown take effect
  const handleDropdownButton = (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") === null) {
      setDropdownActive(false);
    } else {
      setDropdownActive(!isDropdownActive);
    }
  };

  // makes dropdown menu disappear once user selects option
  const handleMenuItemClick = () => {
    setDropdownActive(false);
  };

  // makes dropdown menu disappear if user clicks outside of dropdown box
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.matches("[data-dropdown-button]") &&
        e.target.closest("[data-dropdown]") === null
      ) {
        setDropdownActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className={`dropdown ${isDropdownActive ? "active" : ""}`}>
        <button
          className="menu-button material-symbols-outlined"
          data-dropdown-button
          onClick={handleDropdownButton}
        >
          menu
        </button>
        <div className="dropdown-menu" data-dropdown>
          <ul>
            <li>
              <Link to={"/"} onClick={handleMenuItemClick}>
                About Me
              </Link>
            </li>
            <li>
              <Link to={"/track"} onClick={handleMenuItemClick}>
                Track
              </Link>
            </li>
            <li>
              <Link to={"/athletics"} onClick={handleMenuItemClick}>
                Athletics History
              </Link>
            </li>
            <li>
              <Link to={"/resume"} onClick={handleMenuItemClick}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DropdownNav;
