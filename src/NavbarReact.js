import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function NavbarReact() {
  return (
    <Navbar style={{ backgroundColor: "#fffbf4" }}>
      <div className="container d-flex justify-content-start">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="//petshop.ph/cdn/shop/files/logo_402e16f1-0585-43d2-93b5-0670497ea559.png?v=1680062661&width=500"
            width="90"
            height="40"
            className="d-inline-block align-top ms-5"
          />{" "}
        </Navbar.Brand>
        <Nav className="me-5 pe-5">
          <Nav.Link href="#dogs" style={{ fontWeight: "bold" }}>
            <NavDropdown title="Dogs">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link href="#cats" style={{ fontWeight: "bold" }}>
            <NavDropdown title="Cats">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link href="#fish" style={{ fontWeight: "bold" }}>
            <NavDropdown title="Fish">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link href="#smallpets" style={{ fontWeight: "bold" }}>
            <NavDropdown title="Small Pets">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link
            className="mt-2"
            href="#allproducts"
            style={{ fontWeight: "bold" }}
          >
            All Products
          </Nav.Link>
          <Nav.Link
            className="mt-2"
            href="#homecare"
            style={{ fontWeight: "bold" }}
          >
            Home Care
          </Nav.Link>
          <Nav.Link
            className="mt-2"
            href="#contactus"
            style={{ fontWeight: "bold" }}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavbarReact;
