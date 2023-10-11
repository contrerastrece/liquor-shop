import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";
import data from "../data/data.json";
import Modal from "../components/Modal";
import { useRef, useState } from "react";

const Category = () => {
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
      <h2>{category}</h2>

      <Search />
      {productFilter.map((p, index) => (
        <Card data={p} key={index} openModal={openModal}/>
      ))}

      {dataModal !== null && (
        <Modal data={dataModal} onClose={closeModal} modalRef={modalRef} />
      )}
    </div>
  );
};

export default Category;
