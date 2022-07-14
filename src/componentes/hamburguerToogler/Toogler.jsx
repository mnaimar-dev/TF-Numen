import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Toogler.css'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

export default function Toogler({ contador }) {

  return (
    
      <Navbar className="toogler_nav" expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav_link main_links text-decoration-none mt-2" to="/">Home</NavLink>
              <NavLink className="nav_link main_links text-decoration-none mx-3 mt-2" to="/products">Productos</NavLink>
              <NavLink className="nav_link main_links text-decoration-none mt-2" to="/contact">Contacto</NavLink>
              <NavLink className="nav_link icon search text-decoration-none mt-2" to="/products"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
              <NavLink 
                className="nav_link icon cart mt-2" 
                to="/cart">
                  <i className="fa-solid fa-cart-shopping">
                    <span className="cart_contador"> { contador }</span>
                  </i>
                </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}