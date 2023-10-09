import { useState } from "react";
import img1 from "../images/popular1.png";
import { HiChevronLeft, HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleRestar=()=>{
    console.log(count);
    if(count <=1){
      return;
    }
    setCount(count-1);
  }
  const handleSumar=()=>{
    console.log(count);
    setCount(count+1);    
  }

  const price=count*2.99


  return (
    <div>
      <Link to='/'>

      <HiChevronLeft style={{fontSize:'2rem'}}/>
      </Link>
      

      <h2 className="text-[2rem]">Cart</h2>
      
      <div className="flex flex-col gap-3">
        <div className="card card-side bg-base-100 shadow-md rounded-lg  p-0 h-36">
          <figure>
            <img src={img1} alt="" className="w-32 " />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Smirnoff Lemon Vodka</h2>
            <div className="text-neutral-400 text-xs font-medium">
              375ml Can | 5%
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <button className={`btn btn-xs btn-outline ${
                    count === 1 ? "btn-disabled" : "btn-success"
                  }`} onClick={handleRestar} disabled={count === 1} >
                  <HiMinus />
                </button>
                <span className="text-[1.2rem]">{count}</span>
                <button className="btn btn-xs btn-outline btn-success" onClick={handleSumar}>
                  <HiPlus />
                </button>
              </div>
              <span className=" text-emerald-400 text-2xl font-bold  justify-end">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <button className="btn btn-md btn-success text-white">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
