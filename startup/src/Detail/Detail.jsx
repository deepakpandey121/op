import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams

import "./Detail.css";
import { ServiceContext } from "../context/Context";

const Detail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const { update } = useContext(ServiceContext); // Access detail data from Context

 useEffect(() => {
  if (!update || update.id !== id) {
    console.log(`Fetch data for ID: ${id}`);
    // Yahan aap firse API call kar sakte hain agar required ho
  }
}, [id, update]);


  if (!update) {
    return <p>Loading details...</p>;
  }

  return (
    <div className="detail-container">
      <h1>{update.title}</h1>
      <p>{update.description}</p>
      <img src={update.image} alt={update.title} className="detail-image" />
    
     
    </div>
  );
};

export default Detail;
