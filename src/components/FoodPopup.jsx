import React from "react";
import OrderCheckImg from "/check-mark.png";

const FoodPopup = ({ message }) => {
  return (
    <div className="container flex  fixed bg-green-200 h-16 w-[80vw]  rounded-lg left-8 top-8  text-center items-center justify-center font-semibold  space-x-4   ">
      <img src={OrderCheckImg} alt="icon " className=" h-10" />
      <span>{message}</span>
    </div>
  );
};

export default FoodPopup;
