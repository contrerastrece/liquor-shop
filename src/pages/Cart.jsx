import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = ({cart,deleteToCart}) => {
  console.log(cart);
  return (
    <div className="relative">
      <Link to="/">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
      </Link>

      <h2 className="text-[2rem]">Cart</h2>

      {cart.length ? (
        <div className="flex flex-col gap-3 relative border">
          {cart.map((item, i) => (
            <CartItem key={i} data={item} deleteToCart={deleteToCart}/>
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
