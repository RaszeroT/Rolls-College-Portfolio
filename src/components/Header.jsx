import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div id="heading">
          <a href="/">
            <img
              id="logo"
              src="./assets/logo/1.png"
              alt="Royce Thomas-Quintana Logo"
            />
          </a>
          <h1 id="master-heading" className="quintessential">
            Royce Thomas-Quintana
          </h1>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
