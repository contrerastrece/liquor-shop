import Lottie, { useLottie } from "lottie-react";
import React from "react";
// import boxempty from "../assets/boxempty.json";

export const LottieAnimation = ({ alto, animacion }) => {
  const defaultAnimation = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  const style = {
    height: `${alto}px`,
    // border:'1px solid'
  };
  const { View } = useLottie(defaultAnimation, style);
  return View;
};
