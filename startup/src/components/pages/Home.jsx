
import React from 'react';
import './Home.css';
import Review from './Review';
import Service from './Service';
function Home() {
  return (
    <>
    <div className="hero-container">
      {/* Image with cover effect */}
      <div className="image-cover">
        <img 
          src='https://sdmntprwestus.oaiusercontent.com/files/00000000-6b94-6230-9b8a-dbfbb2de8ebe/raw?se=2025-06-23T05%3A15%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=59478fd6-7853-5228-9140-5782cbf7c654&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-22T16%3A16%3A10Z&ske=2025-06-23T16%3A16%3A10Z&sks=b&skv=2024-08-04&sig=wMt6CS2fz1/oIMXnDVc3AeqHozaHykHs9S0Dto2CdNY%3D' 
          alt="Background Cover"
          className="cover-image"
        />
      </div>
      
      {/* Text and Search Bar Overlay */}
      <div className="content-overlay">
        <h1 className="hero-title"> Find Trusted Professionals for Any Home Project</h1>
       
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search anything..."
            className="search-bar"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
    <Service />
       <Review/>
       </>
  );
}

export default Home;