import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

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
          <div className="sticky bottom-20">
            <button className="btn btn-block btn-success text-white">
              Send Place Order
            </button>
          </div>
        </div>
      ) : (
        <div>Carrito Vacio</div>
      )}
    </div>
  );
};
