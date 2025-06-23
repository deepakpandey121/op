import React, { useState } from 'react';
import './Request.css'; 

const Request= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    description: ''
  });

  const serviceOptions = [
    'Select Service',
    'Plumbing Services',
    'Carpentry Services',
    'Electrical Services',
    ' HVAC Services',
    'Interior/Exterior Painting',
    ' Roofing Services',
     'Pest Control Services',
    
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Service request submitted successfully!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      description: ''
    });
  };

  return (
    <div className="service-request-container">
      <h2>Request a Service</h2>
      <form onSubmit={handleSubmit} className="service-request-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            {serviceOptions.map((option, index) => (
              <option key={index} value={option} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your issue"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Request;