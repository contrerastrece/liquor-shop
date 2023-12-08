import beer1 from "../images/beer1.png";
const Card = ({ data, openModal }) => {
  return (
    <div
      className="card card-side  bg-base-100 border cursor-pointer hover:bg-base-200  rounded-lg  p-0 h-36 relative"
      onClick={() => {
        openModal(data);
      }}
    >
      <figure className="w-36 h-36">
        <img src={beer1} alt="" className="w-36 h-32 object-contain" />
      </figure>
      <div className="card-body text-left w-[calc(100%_-_9rem)] justify-between">
        <div className="">
          <h3 className="font-semibold text-lg md:text-2xl truncate">{data.nombre}</h3>         
        </div>
        <div className="text-neutral-400 text-xs font-medium">
          {data.cantidad_medida} Can | {data.porcentaje_alcohol}
        </div>
        <p className=" text-emerald-400 text-md font-medium">
          S/ {data.precio}
        </p>
      </div>
    </div>
  );
};

export default Card;
