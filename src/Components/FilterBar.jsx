import React from "react";

const FilterBar = () => {
  return (
    <>
      <div className="">
        <div className="menu menu-horizontal px-5 w-52 ">
          <ul>
            <li>
              <details>
                <summary>Sort By:</summary>
                <ul>
                  <li>
                    <a>Date Added</a>
                  </li>
                  <li>
                    <a>A - Z</a>
                  </li>
                  <li>
                    <a>Price [L-H]</a>
                  </li>
                  <li>
                    <a>Price [H-L]</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
