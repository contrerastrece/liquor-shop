import { HiChevronLeft, HiOutlinePaperAirplane } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { LottieAnimation } from "../components/LottieAnimation";
import boxempty from "../assets/boxempty.json";

export const Cart = () => {
  const { cart } = useCart();
  // console.log(cart, "💔");

  return (
    <div className="relative">
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-4xl">Cart</h2>
      </Link>

      {cart.length > 0 ? (
        <div className="flex flex-col gap-3 relative ">
          {cart.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
          <div className="sticky bottom-20 flex flex-col gap-4">
            <button className="btn btn-block text-white btn-outline btn-error">
              <HiOutlineTrash style={{ fontSize: "1.5rem" }} />
              <span className="text-lg">Clear Cart</span>
            </button>
            <button className="btn btn-block btn-success text-white">
              <HiOutlinePaperAirplane style={{ fontSize: "1.5rem" }} />
              <span className="text-lg">Send Place Order</span>
            </button>
          </div>
        </div>
      ) : (
        <div><LottieAnimation animacion={boxempty} alto='300' /></div>
      )}
    </div>
  );
};
