import beer1 from "../images/beer1.png";
// import beer2 from "../images/beer2.png";
// import beer3 from "../images/beer3.png";
// import beer4 from "../images/beer4.png";
const Card = ({ data ,openModal}) => {

  return (
    <div
      className="card card-side bg-base-100 shadow-md rounded-lg p-0 h-36 cursor-pointer"  onClick={()=>{openModal(data)}}>
      <figure className="border">
        <img src={beer1} alt="" className=" w-20 object-contain border " />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{data.title}</h2>
        <div className="text-neutral-400 text-xs font-medium">
          375ml Can | 5%
        </div>
        <p className=" text-emerald-400 text-xl font-medium">$2.99</p>
      </div>
    </div>
  );
};

export default Card;
