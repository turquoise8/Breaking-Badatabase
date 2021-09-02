import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about me</h1>
      <p>
        This is a project developed by Emre Apaydin solely for portfolio
        purposes. Source code can be found in the Github link below. Feel free
        to check my profiles and offer me a position :&#41;
      </p>
      <section className="icon-section">
        <a href="#" className="social-icon">
          <FaGithub />
        </a>
        <a href="#" className="social-icon">
          <FaInstagram />
        </a>
        <a href="#" className="social-icon">
          <FaLinkedin />
        </a>
      </section>
    </section>
  );
};

export default About;
