import beer1 from "../images/beer1.png";
const Card = ({ data, openModal }) => {
  return (
    <div
      className="card card-side card-compact bg-base-100 shadow-md rounded-lg p-0 h-36 cursor-pointer "
      onClick={() => {
        openModal(data);
      }}
    >
      <figure className="w-36 h-36 ">
        <img src={beer1} alt="" className="w-full h-32 object-contain" />
      </figure>
      <div className="card-body text-left">
        <div className="card-title w-[20rem] truncate">
          <p className="truncate">{data.nombre}</p>
        </div>
        <div className="text-neutral-400 text-xs font-medium">
          {data.cantidad_medida} Can | {data.porcentaje_alcohol}
        </div>
        <p className=" text-emerald-400 text-xl font-medium">
          S/ {data.precio}
        </p>
      </div>
    </div>
  );
};

export default Card;
