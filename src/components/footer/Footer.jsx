import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harsh Soni</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/harsh-soni-dev"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:harshsoni.dev@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bx-envelope"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9466480296&text=Hi Harsh"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Harsh Soni. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
