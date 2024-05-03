import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Harsh
        </a>
        <div className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`nav__link ${
                  activeNav === "#home" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`nav__link ${
                  activeNav === "#about" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={`nav__link ${
                  activeNav === "#skills" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#Qualification")}
                className={`nav__link ${
                  activeNav === "#qualification" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-book-alt nav__icon"></i> Qualification
              </a>
            </li>
            {/* <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={`nav__link ${
                  activeNav === "#portfolio" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Portfolio
              </a>
            </li> */}
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`nav__link ${
                  activeNav === "#contact" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-phone-alt nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
