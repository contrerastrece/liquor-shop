import Frame1 from "../images/Frame1.svg";
import Frame2 from "../images/Frame2.svg";
import Frame3 from "../images/Frame3.svg";
import Frame4 from "../images/Frame4.svg";

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4">
      <div className="carousel-item">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body p-0 w-28">
            <img src={Frame1} className="rounded-box h-28" />
            <p>Beer</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body p-0 w-28">
            <img src={Frame2} className="rounded-box h-28" alt="Rum" />
            <p>Rum</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body p-0 w-28">
            <img src={Frame3} className="rounded-box h-28" alt="sparker"/>
            <p>Sparker</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body p-0 w-28">
            <img src={Frame4} className="rounded-box h-28" />
            <p>Whisky</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Carousel;
