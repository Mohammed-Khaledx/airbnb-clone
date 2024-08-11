import Header from "./components/header";
import Gallery from "./components/gallery";
import Card from "./components/card";
import Data from "./data";

import "./App.css";

function App() {
  
  console.log(Data);
  let CardsData = Data.map((item) => {
    return (
      <Card
        key={item.id}
        info = {item}
      />
    );
  });
  return (
    <>
      <Header />
      <Gallery />
      <div className="cards">
        <div className="container">{CardsData}</div>
      </div>
    </>
  );
}

export default App;
