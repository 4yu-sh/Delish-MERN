import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Sociallinks = () => {
  return (
    <>
      <div className="w-48 m-auto gap-3  grid grid-flow-col-dense grid-cols-4 ">
        <a href="www.facebook.com" target="_blank">
          <FaFacebookF className="text-3xl" />
        </a>
        <a href="www.instagram.com" target="_blank">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="www.youtube.com" target="_blank">
          <FaYoutube className="text-3xl" />
        </a>
        <a href="www.tiktok.com" target="_blank">
          <FaTiktok className="text-3xl" />
        </a>
      </div>
    </>
  );
};

export default Sociallinks;
