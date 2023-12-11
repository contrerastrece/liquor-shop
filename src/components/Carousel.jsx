import { Link } from "react-router-dom";
import { useCategoriesStore } from "../store/CategoriesStore";
const Carousel = () => {
  const datacategories = useCategoriesStore((state) => state.datacategories);
  return (
    <div className="carousel carousel-center max-w-md space-x-4 p-1 ">
      {datacategories.map((c, index) => (
        <Link to={`/Category/${c.name}`} key={index}>
          <div className="carousel-item border rounded-2xl ">
            <div className="card bg-base-100 hover:bg-base-200">
              <div className="card-body p-0 w-28">
                <img src={c.img} className="rounded-box h-28" alt={c.nombre} />
                <p className="font-semibold text-lg">{c.name}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
