import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Developed by chaox</footer>
    </>
  );
};

export default Main;
