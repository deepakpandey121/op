import React, { useEffect, useState } from "react";
import "./service.css";
import { getdata } from "../../api/Postapi";

const Service = () => {
  const [data, setData] = useState([]);

  const getpostdata = async () => {
    try {
      const res = await getdata();
      setData(res.data); // Assuming `res.data` is an array
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpostdata();
  }, []);

  return (
    <div className="eight-boxes-container" id="service">
      {data.slice(0, 8).map((item, index) => ( // Render first 8 items
        <div key={index} className="box">
          <div className="box-content">
            <img src={item.image} alt={item.category} className="box-image" />
            <h2 className="box-title">{item.category}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;