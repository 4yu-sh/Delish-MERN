import React from "react";
import Video from "/Videos/DelishCinematic.mp4";
const Videoplayer = () => {
  return (
    <>
      <div className="lg:flex hidden">
        {/* <a
          href="/collections/mens-spring-summer-2024-collection"
          aria-label="Video https://cdn.shopify.com/videos/c/o/v/a95c3e7acccf4db3a9751675f8306ba8.mp4"
        > */}
        <video
          class="video-two__video"
          // data-mobile-src="https://cdn.shopify.com/videos/c/o/v/cf4779f5c97847a6814b18e02987ba11.mp4"
          src={Video}
          autoplay=""
          loop="true"
          muted="true"
          playsinline=""
          onclick="this.paused ? this.play() : this.pause()"
        ></video>
        {/* </a> */}
        {/* <div class="video-control-icons playing">
          <span class="play">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Play slideshow"
            >
              <path
                d="M0.299805 0.689941V12.3899L11.9998 6.54014L0.299805 0.689941Z"
                fill="black"
              ></path>
            </svg>
          </span>
          <span class="pause">
            <svg
              class="icon icon--pause-2"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Pause slideshow"
            >
              <g clip-path="url(#clip0_1137_1321)">
                <rect x="2" width="1.5" height="9" fill="black"></rect>
                <rect x="5.5" width="1.5" height="9" fill="black"></rect>
              </g>
              <defs>
                <clipPath id="clip0_1137_1321">
                  <rect width="9" height="9" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Videoplayer;
