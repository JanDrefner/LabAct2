import { Card } from "react-bootstrap";
import "./index.css";

function Categories(data) {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "44px",
      }}
    >
      <div className="d-flex container justify-content-center">
        <div class="d-inline-flex resized-img">
          <div className="card">
            <img
              src={data.dataObj.photoName}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data.dataObj.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
