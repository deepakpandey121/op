import React from "react";
import "./Footer.css";
import {  useNavigate } from "react-router-dom";

const Footer = () => {
  const navigator = useNavigate()
  return (
    <div className="get-started-container">
      {/* Main CTA Section */}
      <section className="cta-section">
        <h1>Ready to Get Started?</h1>
        <p className="subtitle">Find the perfect professional for your next project.</p>
        <button className="cta-button" onClick={()=>navigator("/request")}>Request a Service</button>
        <div className="divider"></div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section" id="footer">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="copyright">
          © 2024 HandyConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;