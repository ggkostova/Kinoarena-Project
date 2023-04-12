import React from "react";
import "./Footer.css"; 

function Footer() {
  return (
    <footer>
      <div className="column">
        <h3>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="column">
        <h3>Links</h3>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
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
