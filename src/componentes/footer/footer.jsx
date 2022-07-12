import React from "react";
import { NavLink } from "react-bootstrap";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <NavLink className="nav_link main_links text-decoration-none mt-2" to="/">
              <img src="http://images.squarespace-cdn.com/content/v1/56f1b69f27d4bda6c8f2555a/1459451039911-CXR2FVEC3ZSZVLNHQFKV/DH_HORSE_ISO.png" alt="logo"/>
            </NavLink>
            </figure>

        </div>
        <div className="box">
          <h2>CONSULTAS</h2>
          <p>hello@darkhorse.com</p>
          <p>+54 11 5555-9999</p>
          <p>Lunes A Viernes de 9hs a 19hs</p>
          <a href="https://www.afip.gob.ar/landing/default.asp" target="_blank">
            <img className="img2" src="https://latolderiaonline.com.ar/wp-content/themes/latolderia/source/img/data-fiscal.jpg" alt="QR"/>

          </a>
       
        </div>

        <div className="box">
          <h2>SEGUINOS</h2>
          <div className="red-social">
            <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></a>
        
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy;2022 <b>DARK HORSE</b> - Todos Los Derechos Reservados.</small>

      </div>
      
    </footer>
  );
};

export default Footer;
