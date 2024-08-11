import "../App.css";
import logo from "../images/airbnb-logo.png";
function Header() {
  return (
    <div className="Header">
      <div className="container">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Header;
