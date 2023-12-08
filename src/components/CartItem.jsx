import React, { useState } from "react";
import img1 from "../images/popular1.png";
import { HiChevronLeft, HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import useCart from "../hooks/useCart";

const CartItem = ({data}) => {

  const {deleteToCart,increment,decrement}=useCart()

  // console.log(data,'🎉');
  const [count, setCount] = useState(data.quantity);
  
  const handleRestar = (id) => {
    // console.log(count);
    decrement(id);
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
    
  };

  const handleSumar = (id) => {
    increment(id);
    // console.log(count);
    setCount(count + 1);
    
  };

const price = count * data.precio;

const DeleteItemFromCart =(id) => {
  alert("Estas seguro de eliminar el producto del cart")
  deleteToCart(id);

};
  
  return (
    <div className="card card-side bg-base-100 border-2 rounded-lg p-2 relative">
      <figure>
        <img src={img1} alt="" className="w-32 " />
      </figure>
      <div className="card-body text-left p-4 justify-between ">
        <div className="flex flex-col gap-1">
        <h2 className="font-semibold md:card-title ">{data.nombre}</h2>
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
              onClick={()=>handleRestar(data.id)}
              disabled={count === 1}
            >
              <HiMinus />
            </button>
            <span className="text-sm">{count}</span>
            <button
              className="btn btn-xs btn-outline btn-success"
              onClick={()=>handleSumar(data.id)}
              
            >
              <HiPlus />
            </button>
          </div>
          <span className=" text-emerald-400 text-md font-semibold  justify-end">
            $ {price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>DeleteItemFromCart(data.id)}>✕</div>
    </div>
  );
};

export default CartItem;
