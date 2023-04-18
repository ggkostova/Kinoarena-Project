import React from "react";
import "./Footer.css"; 
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="column">
        <h3>About us</h3>
        <p className="footer-p">Cinemas website</p>
        <p className="footer-p">© 2023 Kino</p>
      </div>
      <div className="column">
        <h3>Links</h3>
        <ul>
          <Link className="footer-links" to={'/cinemas'}>Cinemas</Link><br/>
          <Link className="footer-links" to={'/program'}>Program</Link><br/>
          <Link className="footer-links" to={'/tickets'}>Buy tickets</Link><br/>
        </ul>
      </div>
      <div className="column">
        <h3>Info</h3>
        <ul>
          <li>Address: 123 Main Street</li>
          <li>Phone: 555-555-5555</li>
          <li>Email: info@cinemawebsite.com</li>
        </ul>
      </div>
      <div className="column">
        <h3>Social media</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
