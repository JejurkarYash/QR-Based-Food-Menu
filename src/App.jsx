import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FoodItem from "./components/FoodItem";
import { FoodDetails } from "./data";
import OrderListButton from "./components/OrderListButton";
import FoodPopup from "./components/FoodPopup";

function App() {
  const [isPopupmsg, setIsPopupmsg] = useState(false);
  const [PopuMsg, setPopupMsg] = useState();
  const [order, setOrder] = useState([]);

  function updateQuantity(quantity) {
    setFoodQuantity(quantity);
  }

  function handleAddButton(foodName, foodCount, spanId) {
    FoodDetails.forEach((item) => {
      if (
        item.foodName === foodName &&
        item.foodName === spanId &&
        foodCount !== 0
      ) {
        console.log(`${foodCount} ${foodName} is Added`);
        setIsPopupmsg(true);
        setPopupMsg(`${foodCount} ${foodName} is Added `);

        const Index = order.findIndex((value) => value.foodName === foodName);
        if (Index !== -1) {
          setOrder((prevOrder) => {
            const updateOrder = [...prevOrder];
            updateOrder[Index].quantity = foodCount;
            return updateOrder;
          });
        } else {
          setOrder((prevOrder) => [
            ...prevOrder,
            { foodName, quantity: foodCount },
          ]);
        }
      }
    });
    console.log(order);
    // After 4 second it sets the popup message to false
    setTimeout(() => setIsPopupmsg(false), 4000);
  }

  return (
    <>
      <Navbar />
      {isPopupmsg && <FoodPopup message={PopuMsg} />}

      <Banner />
      {FoodDetails.map((foodItem) => (
        <FoodItem
          key={foodItem.foodName}
          {...foodItem}
          spanId={foodItem.foodName}
          onClick={(foodCount, spanId) => {
            handleAddButton(foodItem.foodName, foodCount, spanId);
          }}
        />
      ))}
      <OrderListButton />
    </>
  );
}

export default App;
