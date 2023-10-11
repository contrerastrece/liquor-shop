import { useRef, useState } from "react";
import data from "../data/data.json";
import Card from "./Card";
import Modal from "./Modal";
import Toast from "./Toast";

const Popular = () => {
  const [dataModal, setdataModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const modalRef = useRef(null);

  const openModal = (data) => {
    console.log(data);
    setdataModal(data);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  // Función para cerrar el modal
  const closeModal = () => {
    setdataModal(null);
    if (modalRef.current) {
      modalRef.current.close();
    }
    setShowToast(true);
    // Establece un temporizador para ocultar el Toast después de un cierto tiempo
    setTimeout(() => {
      setShowToast(false);
    }, 1000); // Por ejemplo, 5 segundos (ajusta el tiempo según tus preferencias)

  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {data.productos.map((data) => (
          <Card key={data.id} openModal={openModal} data={data} />
        ))}
      </div>

      {dataModal !== null && (
        <Modal data={dataModal} onClose={closeModal} modalRef={modalRef} />
      )}
      {showToast && <Toast/>}
    </>
  );
};

export default Popular;
