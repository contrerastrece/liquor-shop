import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { HiOutlineTicket } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
// import "../app.css";
export const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#979797", size: "2rem" }}>
      <div className="btm-nav  rounded-t-xl ">
        <NavLink to="/">
          <HiOutlineHome className="icon" />
          <span className="text-[#979797]">Home</span>
        </NavLink>
        <NavLink to="/Promotion">
          <HiOutlineReceiptPercent className="icon" />
          <span className="text-[#979797]">Promotion</span>
        </NavLink>
        <NavLink to="/Cart">
          <HiOutlineTicket className="icon" />
          <span className="text-[#979797]">Cart</span>
        </NavLink>
        <NavLink to="/Profile">
          <HiOutlineUser className="icon" />
          <span className="text-[#979797]">Profile</span>
        </NavLink>
      </div>
    </IconContext.Provider>
  );
};
