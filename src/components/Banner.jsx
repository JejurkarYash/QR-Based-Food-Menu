import React, { useState, useEffect } from "react";
import { BannerImages } from "../data";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initial random index

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex(Math.floor(Math.random() * BannerImages.length));
    };

    // Set the initial random image and start the interval immediately
    changeImage();
    
    const intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [BannerImages]);

  return (
    <div className="container   h-72   m-5  bg-blue-300  w-80 rounded-2xl   ">
      <img
        src={BannerImages[currentIndex]}
        alt="burger-image"
        className="  h-full w-full  m-5   rounded-2xl mx-auto object-fill "
      />
    </div>
  );
};

export default Banner;
