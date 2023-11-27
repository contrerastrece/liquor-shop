import { IconContext } from "react-icons";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { HiOutlineTicket } from "react-icons/hi2";
import {NavLink } from "react-router-dom";
import '../app.css';
import { HiOutlineUser } from "react-icons/hi";
export const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#979797", size: "1.8rem" }}>
      <div className="btm-nav">
        <NavLink to="/" >
          <HiOutlineHome className="icon"/>
          <span className="text-[#979797]">Home</span>
        </NavLink>
        <NavLink to="/Promotion">
          <HiOutlineReceiptPercent className="icon" />
          <span className="text-[#979797]">Promotion</span>
        </NavLink>
        <NavLink to="/Cart">
          <HiOutlineTicket className="icon"/>
          <span className="text-[#979797]">Cart</span>
        </NavLink>
        <NavLink to="/Profile">
          <HiOutlineUser className="icon"/>
          <span className="text-[#979797]">Profile</span>
        </NavLink>
      </div>
    </IconContext.Provider>
  );
};

