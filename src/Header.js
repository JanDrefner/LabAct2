import { Card, CardBody } from "react-bootstrap";

function Header() {
  const Time = new Date();
  const hour = Time.getHours();

  const openingTime = 7;
  const closingTime = 13;
  if (hour >= openingTime && hour <= closingTime) {
    return (
      <div className="text-center">
        <Card>
          <CardBody
            style={{
              backgroundColor: "#50a19d",
              color: "white",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Need Help? Call Us +632 8 928 2222
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <Card>
          <CardBody
            style={{
              backgroundColor: "#50a19d",
              color: "red",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
          >
            We're are currently closed. Please visit us between {openingTime}
            :00 A.M. to {closingTime}:00 P.M.
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Header;
