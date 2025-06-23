import React, { createContext, useState } from "react";

// Create Context
export const ServiceContext = createContext();

// Context Provider Component
export const Context = ({ children }) => {
  const [update, setUpdate] = useState(null); // Store the selected service detail

  return (
    <ServiceContext.Provider value={{ update, setUpdate }}>
      {children}
    </ServiceContext.Provider>
  );
};
