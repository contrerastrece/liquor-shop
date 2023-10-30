import { Link } from "react-router-dom";
// import data from "../data/data.json";
import useCart from "../hooks/useCart";
const Carousel = () => {

  const {productos}=useCart()

  return (
    <div className="carousel carousel-center max-w-md space-x-4 p-1">
      {productos.categorias.map((c,index) => (
        <Link to={`../pages/Category/${c.nombre}`} key={index}>
          <div className="carousel-item">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body p-0 w-28">
                <img src={`src/images/${c.imagen}`} className="rounded-box h-28" alt={c.nombre}/>
                <p>{c.nombre}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
