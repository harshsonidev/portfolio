import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/harsh-soni-dev"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="mailto:harshsoni.dev@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope-alt"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=9466480296&text=Hi Harsh"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
