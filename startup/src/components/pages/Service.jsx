import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./service.css";

import { detaildata, getdata } from "../../api/Postapi";
import {  ServiceContext } from "../../context/Context";

const Service = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setUpdate } = useContext(ServiceContext); // Access setUpdate from Context
  const navigate = useNavigate(); // Initialize useNavigate

  const getpostdata = async () => {
    try {
      const res = await getdata();
      setData(res.data.data);
      console.log() // Assuming res.data is an array
    } catch (error) {
      console.log(error);
    }
  };

  const handledetail = async (id) => {
    setLoading(true);
    try {
      const res = await detaildata(id);
      setUpdate(res.data.data); // Store detail data in Context
      navigate(`/detail/${id}`); // Navigate to Detail page with ID
    } catch (error) {
      console.error("Error fetching detail data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getpostdata();
  }, []);

  return (
    <div className="eight-boxes-container" id="service">
      {loading && <p>Loading...</p>}
      {!loading &&
        data.slice(0,8).map((item) => (
          <div
            key={item.id}
            className="box"
            onClick={() => handledetail(item.id)} // Trigger navigation on click
          >
            <div className="box-content">
              <img src={item.image} alt={item.category} className="box-image" />
              <h3 className="box-title">{item.category}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Service;
