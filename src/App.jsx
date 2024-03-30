// import outlet
import { Outlet } from "react-router-dom";

// import styling
import "./App.css";
import "./style/header.css";
import "./style/navBar.css";
import "./style/footer.css"

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
