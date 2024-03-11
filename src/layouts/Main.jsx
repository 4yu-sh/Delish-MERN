import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../App.css";

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
