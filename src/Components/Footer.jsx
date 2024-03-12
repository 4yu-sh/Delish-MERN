import React from "react";
import DelishInfo from "./DelishInfo";
import Footerquote from "./Footerquote";
import Sociallinks from "./Sociallinks";

const Footer = () => {
  return (
    <>
      <DelishInfo />
      <Footerquote />
      <Sociallinks />
      <div className=" flex justify-between p-5">
        <div>
          <a>T & C*</a>
        </div>
        <div>
          <a>originxchaos</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
