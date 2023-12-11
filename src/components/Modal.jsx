import { useEffect, useState } from "react";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import useCart from "../hooks/useCart";

const Modal = ({ onClose, data, modalRef }) => {
  const [count, setCount] = useState(1);
  const {addToCart}=useCart()


  const handleRestar = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };
  const handleSumar = () => {
    setCount(count + 1);
  };

  const price = count * data.price;

  const handleAdd = (id) => {
    // console.log(id);

    addToCart(id);

    if (modalRef.current) {
      modalRef.current.close();
      onClose();
      // setCount(1)
    }

  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, [modalRef]);

  return (
    <dialog className=" modal modal-bottom sm:modal-middle" ref={modalRef}>
      <div className="modal-box ">
        <div className="card card-side card-compact p-0">
          <figure className="w-36 h-36">
            {/* <img src={`src/images/${data.imagen}`} alt="" className="w-32 " /> */}
            <img src={data.img} alt="" className="w-32 h-36 object-contain" />
          </figure>

          <div className="card-body text-left">
            <h3 className="card-title text-xl">{data.name}</h3>
            <div className="text-neutral-400 text-xs font-medium">
              {data.quantity_measure} Can | {data.porcentage_alcohol}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-between h-14">
                <span className="text-primary font-medium">Qty</span>
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
                  <span className="text-[1.2rem]">{count}</span>
                  <button
                    className="btn btn-xs btn-outline btn-success"
                    onClick={handleSumar}
                  >
                    <HiPlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between h-14">
                <span className="text-primary font-medium">Price</span>
                <span className=" text-primary text-2xl font-bold  justify-end">
                  ${price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                modalRef.current.close();
              }}
            >
              ✕
            </button>
          </form>
          <button
            className="btn btn-success btn-block text-white"
            onClick={() => handleAdd(data.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
