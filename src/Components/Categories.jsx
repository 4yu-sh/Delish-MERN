import React from "react";

const Categories = () => {
  const categoriesItems = [
    {
      id: 1,
      title: "Vegetable",
      desc: "Straight from the land, continously monitored using AI technology for harmful substances,without any use of chemicals",
      img: "/Images/vegetable.png",
      color: "bg-green-700",
    },
    {
      id: 2,
      title: "Meat",
      desc: "Straight from the farm, continously monitored using AI technology for harmful substances,without any use of chemicals",
      img: "/Images/proteins.png",
      color: "bg-red-700",
    },
    {
      id: 3,
      title: "Fruit",
      desc: "Straight from the land, continously monitored using AI technology for harmful substances,without any use of chemicals",
      img: "/Images/harvest.png",
      color: "bg-yellow",
    },
    {
      id: 4,
      title: "Dairy",
      desc: "Straight from the farm, continously monitored using AI technology for harmful substances,without any use of chemicials",
      img: "/Images/dairy.png",
      color: "bg-zinc-700",
    },
  ];

  return (
    <>
      <div className="section-container pt-16 ">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold my-2 leading-snug uppercase font-primary">
            Categories
          </h2>
          <p className="font-secondary tracking-wide text-lg"> EXPLORE</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-8 mb-8">
        {categoriesItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-full bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-500 transition-all"
          >
            <div className="mt-5 space-y-1">
              <h5 className="font-primary font-bold ">{item.title}</h5>

              <div className=" flex w-full mx-auto items-center justify-center">
                <img
                  src={item.img}
                  className={`${item.color} p-5 rounded-full w-28 h-28 mx-auto`}
                />
              </div>
              <p className="font-secondary text-xs w-52 text-center ml-6 ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
