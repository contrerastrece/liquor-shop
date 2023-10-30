import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

const Cart = () => {
  const {cart}=useCart()
  console.log(cart,'💔');


  return (
    <div className="relative">
      <Link to="/">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
      </Link>

      <h2 className="text-[2rem]">Cart</h2>

      {cart.length>0 ? (
        <div className="flex flex-col gap-3 relative ">
          {cart.map((item) => (
            <CartItem key={item.id} data={item}/>
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

export default Cart;
