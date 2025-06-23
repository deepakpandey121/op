import React from 'react';
import './Detail.css'; // We'll create this CSS file next

const Detail = () => {
  const services = [
   
  ];

  return (
    <div className="plumbing-services">
      <h1>Plumbing Services</h1>
      <p className="intro">
        SwiftFix offers a wide range of plumbing services to meet your needs. Our experienced and certified plumbers are equipped to handle everything from minor repairs to major installations.
      </p>
      
      <h2>Our Plumbing Services</h2>
      <p className="description">
        We provide comprehensive plumbing solutions, including leak detection and repair, pipe installation and replacement, drain cleaning, water heater services, and fixture repairs. Our team uses the latest technology to ensure efficient and effective service.
      </p>
      
      <h2>Services Offered</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-container">
              <img 
                src={service.image} 
                alt={service.title} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'placeholder.jpg'; // Fallback image if main image fails to load
                }}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;