import { IconContext } from "react-icons";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { HiOutlineTicket } from "react-icons/hi2";

const Footer = () => {
  return (
    <IconContext.Provider
      value={{ color: "", size:'1.8rem' }}
    >
      <div className="btm-nav">
        <button>
          <HiOutlineHome />
          <span className="btm-nav-label">Home</span>
        </button>
        <button className="active">
          <HiOutlineReceiptPercent />
          <span className="btm-nav-label">Promotion</span>
        </button>
        <button>
          <HiOutlineTicket />
          <span className="btm-nav-label">Cart</span>
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
