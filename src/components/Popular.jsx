import { useRef, useState } from "react";
// import img1 from "../images/popular1.png";
// import img2 from "../images/popular2.png";
// import img3 from "../images/popular3.png";

import Card from "./Card";
import Modal from "./Modal";

const Popular = () => {
  const [dataModal, setdataModal] = useState(null);
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
    if(modalRef.current) {
      modalRef.current.close();

    }
  };
  const cardData = [
    { id: 1, title: "Tarjeta 1", description: "Descripción de la Tarjeta 1" },
    { id: 2, title: "Tarjeta 2", description: "Descripción de la Tarjeta 2" },
  ];


  return (
    <>
      <div className="flex flex-col gap-3">
        {cardData.map((data) => (
          <Card
            key={data.id}
            openModal={openModal}
            data={data}
          />
        ))}
      </div>
     
      {dataModal !== null && (
        <Modal data={dataModal} onClose={closeModal} modalRef={modalRef} />
      )}
    </>
  );
};

export default Popular;
