import React from "react";
import ilus from "../../public/Illus.svg";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="container flex justify-center items-center  bg-primary-2 rounded-b-[50%25%] h-[75vh] ">
        <img src={ilus} alt="login" />
      </div>

      <button className="btn btn-lg btn-primary text-white">
        Login With Google
      </button>
    </div>
  );
};
