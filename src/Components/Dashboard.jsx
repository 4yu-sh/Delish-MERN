import React from "react";
import Product from "./Product";

const Dashboard = () => {
  return (
    <div className="section-container bg-gradient-to-r from-white from-0% to-bg to-100%">
      <div>
        {/* image here somewhat like a banner*/}
        <div className="my-7">
          <h1 className="font-primary text-4xl">Best Sellers</h1>
          <div className="font-secondary">
            Picked from our most popular items
          </div>

          <div className="my-3 ">
            <div className="grid grid-cols-3 gap-10 mx-5">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
