import React from "react";
import ilus from "../../public/Illus.svg";
import { useAuthStore } from "../store/AuthStore";
import delivery from '../assets/login.json'
import { LottieAnimation } from "../components/LottieAnimation";

export const Login = () => {
  
const {signIn}=useAuthStore();
// console.log(signIn);

  return (
    <div className="flex bg-white flex-col items-center gap-10 login absolute top-0 bottom-0 left-0 right-0">
      <div className="container flex justify-center items-center bg-primary-2 rounded-b-[50%25%] h-[75vh] ">
        {/* <img src={ilus} alt="login" /> */}
        <LottieAnimation animacion={delivery} />
      </div>

      <button className="btn  btn-success text-white" onClick={signIn}>
        Login With Google
      </button>
    </div>
  );
};
