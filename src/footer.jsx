import React from "react";
import { FaFacebook, FaInstagram, FaTimes, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logos from "./images/footer/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h5 className="fw-bold">READY TO</h5>
          <h5 className="text-success fw-bold">CRACK. TRACK. CONQUER.</h5>
          <button className="btn-outline">Contact Us →</button>
          <p>
            <FaEnvelope className="icon" />
            exploitx.ctf@kpriet.ac.in
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <img src={logos} alt="KPR Logo" height="50" />
          <p className="fw-bold fs-5">KPR Institute Of Engineering And Technology</p>
          <p>Avinashi Road, Uthupalayam, Tamil Nadu 641 407</p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h5 className="text-success fw-bold">Quick Links</h5>
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About this Event</a></li>
              <li><a href="#who-can-join">Who Can Join</a></li>
              <li><a href="#register" className="highlight">Register Now</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <hr />
      <div className="footer-bottom">
        <p>© 2026 - <span className="text-success fw-bold">Exploitx CTF</span></p>

        <a href="https://kpriet.edu.in">kpriet.edu.in</a>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTimes className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
