import "../App.css";
// import hero from "../images/image.png";

import star from "../images/Star-1.png";

function Card({info}) { 
  console.log("ZZ: "+ info );
  let badgeText;
  if (info.openSpots === 0 ) {
    badgeText = 'SOLD OUT'
  }else if(info.location === "Online"){
    badgeText = 'ONLINE'
  }
  console.log(info.coverImg );
  return (
    
        <div className="Card">
          <div className="img-container">
            <img src={info.coverImg} alt="" />
            { badgeText && <span>{badgeText}</span>}
          </div>
          <div className="info">
            <div className="rating">
              <img src={star} alt="" />
              <p>
                {info.stats.rating}{" "}
                <span>
                  ({info.stats.reviewCount}).{info.location}
                </span>
              </p>
            </div>
            <p>{info.title}</p>
            <p>
              <span className="price">from ${info.price}</span> / person
            </p>
          </div>
        </div>

  );
}

export default Card;
