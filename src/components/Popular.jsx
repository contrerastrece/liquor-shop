import img1 from "../images/popular1.png";
import img2 from "../images/popular2.png";
import img3 from "../images/popular3.png";

const Popular = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="card card-side bg-base-100 shadow-md rounded-lg  p-0 h-36">
        <figure>
          <img src={img1} alt="" className="w-32 " />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">
            Smirnoff Lemon Vodka
          </h2>
          <div className="text-neutral-400 text-xs font-medium">
            375ml Can | 5%
          </div>
          <p className=" text-emerald-400 text-xl font-medium">$2.99</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-md rounded-lg p-0 h-36">
        <figure>
          <img src={img2} alt="" className=" w-32" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">Jack Daniel’s Cola Whiskey</h2>
          <div className="text-neutral-400 text-xs font-medium">
            375ml Can | 5%
          </div>
          <p className=" text-emerald-400 text-xl font-medium">$2.99</p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-md rounded-lg p-0 h-36">
        <figure>
          <img src={img3} alt="" className=" w-32" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">Jack Daniel’s Cola Whiskey</h2>
          <div className="text-neutral-400 text-xs font-medium">
            375ml Can | 5%
          </div>
          <p className=" text-emerald-400 text-xl font-medium">$2.99</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
