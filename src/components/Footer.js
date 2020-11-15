import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import regulations from "../utilities/data/dummy.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer__links_container">
          <ul className="footer__links">
            <li className="footer__link">
              <Link to="/katalog">Katalog</Link>
            </li>
            <li className="footer__link">
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li className="footer__link">
              <Link to="/post/historia">historia</Link>
            </li>
            <li className="footer__link">
              <a href={regulations} download="regulamin">
                Regulamin
              </a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__link">
              <Link to="/">Nowości</Link>
            </li>
          </ul>
        </div>
        <ul className="footer__social-links">
          <li className="footer__social-link">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
          </li>
          <li className="footer__social-link">
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
          </li>
          <li className="footer__social-link">
            <a href="https://www.youtube.com/" target="blank">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
