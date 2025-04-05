import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
// import "./Footer.css"; 
// Import the extracted CSS file

const Footer: React.FC = () => {
  return (
    <footer id="Footer" >
      <main className="footer">
      <div className="container">
        <div className="row">
          {/* Vision of the Company */}
          <div className="col-md-4 mx-auto">
            <h5 className="footer-title">VISION OF THE COMPANY</h5>
            {/* <hr className="footer-divider" /> */}
            <p>
              To empower a sustainable future by leading the global transition
              to clean, renewable solar energy, making it accessible to every
              home, business, and community, and inspiring a world where the sun
              powers our lives.
            </p>
          </div>

          {/* <hr className="section-divider" /> */}

          {/* Important Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
            <h6 className="footer-subtitle">Important Links</h6>
            {/* <hr className="footer-divider" /> */}
            <ul className="footer-links">
              {[
                { name: "Home", to: "home" },
                { name: "About", to: "about" },
                { name: "Team", to: "team" },
                { name: "Products", to: "products" },
                { name: "Reviews", to: "reviews" },
                { name: "Contact", to: "contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} smooth={true} duration={300} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <hr className="section-divider" /> */}

          {/* Contact Information */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto contact-info">
            <h6 className="footer-subtitle">Contact</h6>
            {/* <hr className="footer-divider" /> */}
            <p>97/D, Usha Siddhi Kunj, Vardhman Compound, Lalpur, Ranchi, Jharkhand-834001</p>
            <p>BIT Sindri, Dhanbad, Jharkhand <br /> JUT Namkum, Ranchi, Jharkhand</p>
            <p>+91 9430649460</p>
            <p>Panjarrenewables@gmail.com</p>
          </div>
        </div>
      </div>

      {/* <hr className="section-divider" /> */}

      {/* Social Media Links */}
      <ul className="social-media">
        {[
          { href: "https://www.facebook.com/panjarrenewables?mibextid=ZbWKwL", icon: faFacebook, title: "Facebook" },
          { href: "https://www.instagram.com/panjar_renewables/?utm_source=qr&igsh=ZTRjaGo1MzVobGR5", icon: faInstagram, title: "Instagram" },
          { href: "https://www.linkedin.com/company/panjar-renewables/", icon: faLinkedin, title: "LinkedIn" },
        ].map((social) => (
          <li key={social.title}>
            <a href={social.href} className="social-link" title={social.title} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>

      {/* <hr className="section-divider" /> */}

       </main>
      {/* Copyright */}

       <div className="footer-copyright">All rights reserved © Panjar Renewables</div>

    </footer>
  );
};

export default Footer;
