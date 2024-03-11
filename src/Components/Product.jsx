import React from "react";
import logo from "/Images/logo.png";
const Product = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="p-5  " src={logo} alt="Some Vegetable" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-primary">
            Vegetable
            <div>🟢</div>
          </h2>
          <p className="font-secondary">Dummy Product</p>
          <p className="font-secondary">Harvested Date: date-from-db</p>
          <div className="card-actions justify-between">
            <div>
              <div className="font-currency font-bold">NRS 200</div>
            </div>
            <div className="card-actions justify-around">
              <div className="badge badge-outline">Nuwakot</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
