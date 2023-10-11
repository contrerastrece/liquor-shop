import { useEffect, useState } from "react";
import Toast from "./Toast";

const Modal = ({ onClose, data, modalRef }) => {
  const [modalClosed, setModalClosed] = useState(true);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
      onClose();
    }
    setModalClosed(true);
  };
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, [modalRef]);


  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{data?.nombre}</h3>
        <p className="py-4">{data.descripcion}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>
              ✕
            </button>
          </form>
          <button className="btn btn-success" onClick={handleClose}>
            Success
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
