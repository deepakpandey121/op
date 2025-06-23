import React, { useState, useEffect } from "react";
import "./Header.css";
import {  useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate= useNavigate()
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 998);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const handlerequest=()=>{
Navigate("/request")
}
const login=()=>{
Navigate("/login")
}


  

  return (
    <nav className="navbar">
  <div className="navbar-brand">SwiftFix</div>

      {/* Desktop Navigation (visible on larger screens) */}
      {!isMobile && (
        <div className="desktop-content">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#rateing">Rateing</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
          <button className="get-request-btn"  onClick={handlerequest}>
            Get Request
          </button>
          <button className="Login" onClick={login}>Login</button>
        </div>
      )}

      {/* Mobile Hamburger Menu (visible on smaller screens) */}
      {isMobile && (
        <>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <ul className="mobile-navbar-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">Services</a></li>
              <li><a href="/services">Rateing</a></li>
              <li><a href="/contact">Contact</a></li>
              <li>
                <button 
                  className="mobile-get-request-btn" 
                 onClick={handlerequest}
                >
                  Get Request
                </button>
                 <button className="Login" onClick={login}>Login</button>
              </li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
};

export default Header;