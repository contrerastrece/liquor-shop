import { useEffect } from "react";

const Modal = ({ onClose, data,modalRef}) => {

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    onClose();
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
    
  }, [modalRef]);
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{data?.title}</h3>
        <p className="py-4">
          Press ESC key or click the button below to close to close
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </form>
        </div>
      </div>
  </dialog>
  );
};

export default Modal;
