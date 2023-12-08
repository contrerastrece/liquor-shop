import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";
import data from "../data/data.json";
import Modal from "../components/Modal";
import { useRef, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";

export const Category = () => {
  const { category } = useParams();

  const [dataModal, setdataModal] = useState(null);
  const modalRef = useRef(null);

  console.log(data);
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
  };

  const category_filter = (cat) => {
    const catID = data.categorias.find((c) => c.nombre === cat);
    const filterProducts = data.productos.filter(
      (p) => p.categoria_id === catID.id
    );

    return filterProducts;
  };
  const productFilter = category_filter(category);

  return (
    <div>
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-4xl">{category}</h2>
      </Link>

      <Search />
      <div className="flex flex-col gap-3">
        {productFilter.map((p) => (
          <Card data={p} key={p.id} openModal={openModal} />
        ))}
      </div>

      {dataModal !== null && (
        <Modal data={dataModal} onClose={closeModal} modalRef={modalRef} />
      )}
    </div>
  );
};
