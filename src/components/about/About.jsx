import React from "react";
import "../about/about.css";
import ME from "../../assets/about-me.svg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div>
            <q>
              <strong>Creativity </strong>doesn't wait for that perfect moment.
              It fashions its own perfect moments out of
              <strong> ordinary</strong> ones.
            </q>
            <span>  -- Bruce Garrabrandt</span>
            <p>
              I love creativity and developing new things. I want to make
              things that make a difference !!
            </p>
          </div>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p></p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
