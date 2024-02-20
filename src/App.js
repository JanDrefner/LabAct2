import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { dogData } from "./data.js";
import NavbarReact from "./NavbarReact.js";
import Content from "./Content.js";
import Header from "./Header.js";
import AboutUs from "./AboutUs.js";
import Categories from "./Categories.js";

const time = new Date().getHours;

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavbarReact />
      <Content />
      <div className="container" style={{ fontSize: "46px", color: "" }}>
        Our Pet Categories
      </div>
      <div className="d-inline-flex ms-5 ps-5 py-4">
        {dogData.map((data) => (
          <Categories dataObj={data} key={data.title} />
        ))}
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
