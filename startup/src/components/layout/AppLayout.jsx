import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';




function AppLayout() {
  const navigation = useNavigation();
  if(navigation.state === "loading")
    return <h1>loading......</h1>;

  return (
    <>
      <Header/>
   
     
      <Outlet/>
       
      <Footer/>
    </>
  );
}

export default AppLayout;