import React from "react";
import ListIcon from "/list-icon.png";

const OrderListButton = ({onClick}) => {
  return (
    <div className="container flex justify-center align-center text-center m-5 ">
      <button className=" h-12 w-40 bg-buttonColor text-white  font-semibold flex p-2 rounded-lg align-center text-lg  " onClick={onClick}>
        <span>
          <img src={ListIcon} alt="" className=" h-6 m-2 mt-[2px]" />
        </span>
        <span className="  mt-[-1px]">Check Order</span>
      </button>
    </div>
  );
};

export default OrderListButton;
