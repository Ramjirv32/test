import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"; // Ensure the CSS is applied

const Header = () => {
  const navigate = useNavigate();

  const handleScrollAndNavigate = (sectionId) => {
    navigate("/"); // Navigate to the home page first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Delay to allow the navigation to complete
  };

  return (
    <header>
      <div className="logo">Vmai</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        {/* Modified "Book Online" button to navigate and scroll */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleScrollAndNavigate("services"); // Pass the id of the "Our Services" section
          }}
          className="nav-btn"
        >
          Book Online
        </button>
        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
