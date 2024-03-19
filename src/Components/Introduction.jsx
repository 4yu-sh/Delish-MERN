import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="grid grid-flow-col place-items-around gap-5 p-3 my-16">
        <div className="font-primary text-xl  text-center">
          Discover <strong>Delish</strong> — your direct line to the freshest
          farm produce! This sleek app connects you with local farmers, ensuring
          every meal is packed with flavor and freshness. Support sustainable
          agriculture and savor the taste of true freshness
        </div>
        <div className="font-primary text-xl text-center px-3">
          <div>
            <h1 className="font-heading text-4xl p-0">
              So, Let's Start Eating Healthy
            </h1>
          </div>

          <div className="p-10">
            <div className="flex flex-col w-full lg:flex-row">
              {/* <div>Get started with the Sign Up button.</div> */}
              <div className="grid btn flex-grow h-16 card bg-base-300 rounded-box place-items-center">
                Sign Up
              </div>
              <div className="divider lg:divider-horizontal">OR</div>
              <div className="grid btn flex-grow h-16 card bg-base-300 rounded-box place-items-center">
                Log In
              </div>
            </div>
          </div>
          <div className="font-primary ">
            <a href="">
              Become A <strong> Provider </strong>?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
