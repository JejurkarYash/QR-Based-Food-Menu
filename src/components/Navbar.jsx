import React, { useState } from "react";
import MenuImage from "/menu-icon.png";
import SearchIcon from "/search-icon.png";
import listIcon from "/list-icon-2.png";

const Navbar = ({ onClick }) => {
  const [search, setSearch] = useState(false);
  function handleClick() {
    setSearch(true);
  }

  return (
    <div className=" container flex   bg-secondary h-14 justify-between  ">
      <span className="flex ">
        <img src={MenuImage} alt="menu-icon" className="h-9 ml-3 mt-2 " />
        <h2 className="text-xl mt-2 font-bold ">Food Menu</h2>
      </span>
      <span className="flex space-x-2  ">
        <img
          src={SearchIcon}
          alt="search-icon"
          className="h-6 m-3 mr-3  "
          onClick={handleClick}
        />
        {
          // <span className=" bg-buttonColor rounded-full h-5 w-5 text-white  text-center m-1 ml-2  absolute right-8 pt-[-2px] ">
          //   0
          // </span>
        }
        <img src={listIcon} alt="icon" className=" h-7   m-2 pr-3 " />
      </span>
    </div>
  );
};

export default Navbar;
