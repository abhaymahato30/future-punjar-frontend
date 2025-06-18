import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer text-white text-sm font-small px-2 py-4 sm:px-12  bg-gray-900">
      <div className="container text-center text-md-left pb-8">
        <div className="row">
          {/* Vision Section */}
          <div className="col-md-4 mx-auto">
            <h5 className=" font-weight-bold mt-3  text-lg">
              Vision Of The Company
            </h5>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p>
              To empower a sustainable future by leading the global transition
              to clean, renewable solar energy, making it accessible to every
              home, business, and community, and inspiring a world where the sun
              powers our lives.
            </p>
          </div>

          {/* Important Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className=" font-weight-bold text-lg">Important Links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />

            <RouterLink
              to="/"
            
              
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </RouterLink>

            <RouterLink
              to="/about"
            
              
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </RouterLink>

            <RouterLink
              to="/team"
            
              
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Team
            </RouterLink>

            <ScrollLink
              to="products"
            
              
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Products
            </ScrollLink>

            <RouterLink
              to="/policy"
              className="text-white block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Policy
            </RouterLink>

            <RouterLink
              to="/contact"
            
              
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Contact
            </RouterLink>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className=" font-weight-bold text-lg">Contact Us</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
          <p className="flex justify-center items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-xl text-green-400" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=97/D+Usha+Siddhi+Kunj+Vardhman+Compound+Lalpur+Ranchi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              97/D, Usha Siddhi Kunj Vardhman Compound,<br />
              Lalpur, Ranchi, Jharkhand – 834001
            </a>
          </p>

          <p className="flex justify-center items-center gap-2">
            <FaPhone className="text-xl text-green-400" />
            <a href="tel:+919430649460" className="hover:text-white transition">
              +91 94306 49460
            </a>
          </p>

          <p className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-xl text-green-400" />
            <a
              href="mailto:Panjarrenewables@gmail.com"
              className="hover:text-white transition"
            >
              Panjarrenewables@gmail.com
            </a>
          </p>
          </div>
        </div>
      </div>

      <hr />

      {/* Social Links */}
     <ul className="flex justify-center items-center gap-6 py-3">
  <li>
    <h5 className="mb-1 text-white">Follow Us On</h5>
  </li>
  <li>
    <a
      href="https://www.facebook.com/panjarrenewables?mibextid=ZbWKwL"
      className="text-red-500 hover:text-white transition"
      title="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="lg" />
    </a>
  </li>
  <li>
    <a
      href="https://www.instagram.com/panjar_renewables/?utm_source=qr&igsh=ZTRjaGo1MzVobGR5"
      className="text-red-500 hover:text-white transition"
      title="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/company/panjar-renewables/"
      className="text-red-500 hover:text-white transition"
      title="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
  </li>
</ul>


      <hr />

      {/* Copyright */}
      <div className="text-center py-3">
        All copyright are reserved © Panjar Renewables
      </div>
    </footer>
  );
};

export default Footer;
