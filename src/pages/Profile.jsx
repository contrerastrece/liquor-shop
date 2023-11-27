import React from "react";
import { HiChevronLeft, HiPower } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiOutlineWallet } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { useAuthStore } from "../store/AuthStore";
import { Link } from "react-router-dom";
export const Profile = ({ user }) => {
  const {signOut}=useAuthStore();
  console.log(user);
  return (
    <div className="">
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-4xl">Profile</h2>
      </Link>
      <div className="avatar online m-4">
        <div className="w-24 rounded-full ring ring-[#46DE99] ring-offset-base-100 ring-offset-2">
          <img src={`${user.avatar_url}`} alt="" />
        </div>
      </div>
      <h3 className="flex flex-col">
        Hello,
        <span className="font-semibold text-xl">
          {user.full_name.replace(/\([^)]*\)/g, "").trim()}
        </span>
      </h3>
      <div className="flex flex-col gap-3">
        <div className="btn bg-white border-2 bo rounded-md flex gap-2 justify-between p-2 px-3 items-center">
          <HiOutlineWallet className="active text-xl  font-bold" />
          <span className="font-semibold">My Orders</span>
          <HiChevronRight className="icon" />
        </div>
        <div className="btn bg-white border-2 bo rounded-md flex gap-2 justify-between p-2 px-3 items-center " onClick={signOut}>
          <HiPower className="active text-xl  font-bold" />
          <span className="font-semibold">LogoOut</span>
          <HiChevronRight className="icon" />
          
        </div>
        <div className="btn bg-white border-2 bo rounded-md flex gap-2 justify-between p-2 px-3 items-center " onClick={signOut}>
          {/* <HiOutlineMoon className="active text-xl  font-bold" /> */}
          <HiOutlineSun className="active text-xl  font-bold" />
          <span className="font-semibold">Theme: Light</span>
          <HiChevronRight className="icon" />
          
        </div>
      </div>
      {/* <button className="btn btn-primary">LogOut</button> */}
    </div>
  );
};
