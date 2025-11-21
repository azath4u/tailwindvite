import React from "react";

const images = import.meta.glob("../assets/*.jpeg", { eager: true });

const FruitCard = ({ fruit }) => {
  const imgSrc = images[`../assets/${fruit.image}.jpeg`]?.default;

  return <div className="rounded-2xl shadow-xl transform hover:scale-105 duration-100 md:w-full w-2xs relative group" >
 
     <img src={imgSrc} alt={fruit.name} className="w-full  object-cover" />
        <div className="flex flex-col items-center  my-2 py-2 space-y-2">
          <span className=" text-slate-500 block">{fruit.name}</span>
          <span className=" text-slate-500 block">{fruit.price}</span>
          <span className="text-xs invisible group-hover:visible text-lime-400 transition-opacity duration-500">ADD TO CART</span>
        </div>
        <span className="absolute top-3 right-3 bg-blue-400 rounded-md px-2 py-1 text-white text-sm font-semibold">5% Off</span>
        </div>
};

export default FruitCard;
