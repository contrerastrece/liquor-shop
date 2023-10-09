import { IconContext } from "react-icons";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { HiOutlineTicket } from "react-icons/hi2";
import {NavLink } from "react-router-dom";
import '../app.css';
const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#979797", size: "1.8rem" }}>
      <div className="btm-nav">
        <NavLink to="/" >
          <HiOutlineHome className="icon"/>
          <span className="text-[#979797]">Home</span>
        </NavLink>
        <NavLink to="/pages/Promotion">
          <HiOutlineReceiptPercent className="icon" />
          <span className="text-[#979797]">Promotion</span>
        </NavLink>
        <NavLink to="/pages/Cart">
          <HiOutlineTicket className="icon"/>
          <span className="text-[#979797]">Cart</span>
        </NavLink>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
