import React from "react";

import Introduction from "../../Components/Introduction";
import Carousel from "../../Components/Carousel";
import Videoplayer from "../../Components/Videoplayer";

const Landingpage = () => {
  return (
    <>
      <Videoplayer />
      <Introduction />
      <div className="p-56">
        <h1>Review Section</h1>
      </div>
      <div className=" flex place-content-evenly">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/8LAFIDR56Sw?si=X5W-xOsDGU13yrB2&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/kiaf5Jo3NLs?si=WpxX3vsB_etKNtql&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <Carousel />
    </>
  );
};

export default Landingpage;
