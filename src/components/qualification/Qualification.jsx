import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleHandler = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button-flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => toggleHandler(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={`qualification__button button-flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => toggleHandler(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            {/* Masters */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Master of Computer Application
                </h3>
                <span className="qualification__subtitle">
                  Guru Jambeshwar University, Hisar
                </span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Graduation */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelor of Computer Application
                </h3>
                <span className="qualification__subtitle">
                  Government College, Hisar
                </span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i> 2021 - Present
                </div>
              </div>
            </div>

            {/* Schooling */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  Government Senior Secondary School, Hisar
                </span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i> 2017 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            {/* Currently Working */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  Affluence Digital Solutions, Hisar
                </span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i> April 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Previous Job */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internee</h3>
                <span className="qualification__subtitle">
                  KMA Technoware, Hisar
                </span>
                <div className="qualification__calender">
                  <i className="bx bxs-calendar"></i> Sept 2020 - April 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
