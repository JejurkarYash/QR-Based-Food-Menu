import React from "react";
import { useState, useRef } from "react";
import BurgerImage from "../assets/burger-image.jpg";
import AddIcon from "../assets/Add-icon.svg";
import RemoveIcon from "../assets/Remove-icon.svg";
import { FoodDetails } from "../data";

const FoodItem = ({
  foodName,
  foodPrice,
  foodImage,
  onClick,
  getFoodCount,
  updateQuantity,
  spanId,
}) => {
  const [foodCount, setFoodCount] = useState(0);
  const spanRef = useRef(null);

  function handleAddItem() {
    setFoodCount(foodCount + 1);
    // updateQuantity(foodCount + 1);
    // updateQuantity(foodCount);
  }
  function handleRemoveItem() {
    if (foodCount !== 0) {
      setFoodCount(foodCount - 1);
      // updateQuantity(foodCount - 1);
    }
  }

  return (
    <div className="container   h-auto bg-third  w-[90vw] justify-center  mx-auto rounded-2xl ">
      <span className="flex m-2 p-2 space-x-5 ">
        <div className="container bg-white h-[5.5rem] w-20 rounded-xl mt-1  ">
          <img
            src={foodImage}
            alt="food-image"
            className=" h-full w-full rounded-xl align-center object-cover  "
          />
        </div>
        <span className="  flex  flex-col ">
          <h2 className="  font-normal  text-lg ">{foodName}</h2>
          <span className=" font-bold">{foodPrice}</span>

          <span className=" flex  space-x-4 ">
            <span className=" bg-white h-8  p-1   rounded-md   flex  justify-around align-center text-center space-x-3 mt-3   ">
              <img
                src={AddIcon}
                alt="add-icon"
                className="h-5  mt-1   "
                onClick={handleAddItem}
              />
              <span
                className=" font-bold text-xl pb-1 text-center align-center  justify-center mt-[-2px]  "
                id={spanId}
                ref={spanRef}
              >
                {foodCount}
              </span>
              <img
                src={RemoveIcon}
                alt="remove-icon"
                className=" h-5  mt-1 "
                onClick={handleRemoveItem}
              />
            </span>
            <button
              className=" bg-buttonColor h-9 rounded-lg p-2 mt-2 w-20 text-white font-semibold text-center "
              onClick={() => onClick(foodCount, spanId)}
            >
              Add
            </button>
          </span>
        </span>
      </span>
    </div>
  );
};

export default FoodItem;
