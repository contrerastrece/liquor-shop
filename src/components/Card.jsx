
import beer1 from "../images/beer1.png";
import beer2 from "../images/beer2.png";
import beer3 from "../images/beer3.png";
import beer4 from "../images/beer4.png";
const Card = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="card card-side bg-base-100 shadow-md rounded-lg p-0 h-36">
        <figure>
          <img src={beer1} alt="" className=" w-32" />
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
          <img src={beer2} alt="" className=" w-32" />
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
          <img src={beer3} alt="" className=" w-32" />
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
          <img src={beer4} alt="" className=" w-32" />
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
  )
}

export default Card