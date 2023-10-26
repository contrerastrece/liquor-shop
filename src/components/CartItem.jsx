import React, { useState } from "react";
import img1 from "../images/popular1.png";
import { HiChevronLeft, HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

const CartItem = ({data,deleteToCart}) => {
  console.log(data);
  const [count, setCount] = useState(1);
  
  const handleRestar = () => {
    console.log(count);
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
    
  };

  const handleSumar = () => {
    console.log(count);
    setCount(count + 1);
    
  };

const price = count * data.precio;
  
  return (
    <div className="card card-side bg-base-100 shadow-md rounded-lg  p-0 h-36 border border-red-500 relative">
      <figure>
        <img src={img1} alt="" className="w-32 " />
      </figure>
      <div className="card-body text-left p-4 justify-between ">
        <div className="flex flex-col gap-1">
        <h2 className="font-semibold md:card-title border">{data.nombre}</h2>
        <div className="text-neutral-400 text-xs font-medium">
          {data.cantidad_medida} Can | {data.porcentaje_alcohol}
        </div>

        </div>

        <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
            <button
              className={`btn btn-xs btn-outline ${
                count === 1 ? "btn-disabled" : "btn-success"
              }`}
              onClick={handleRestar}
              disabled={count === 1}
            >
              <HiMinus />
            </button>
            <span className="text-[1rem]">{count}</span>
            <button
              className="btn btn-xs btn-outline btn-success"
              onClick={handleSumar}
            >
              <HiPlus />
            </button>
          </div>
          <span className=" text-emerald-400 text-xl font-semibold  justify-end">
            $ {price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-0 " onClick={()=>deleteToCart(data.id)}>X</div>
    </div>
  );
};

export default CartItem;
