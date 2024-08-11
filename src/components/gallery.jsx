import "../App.css";
import group from "../images/Group 77.png";
function Gallery() {
  return (
    <div className="Gallery">
      <div className="container">
        <img src={group} alt="" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a kind hosts-all with out leaving home</p>
      </div>
    </div>
  );
}

export default Gallery;
