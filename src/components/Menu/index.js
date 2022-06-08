import React, { useState } from "react";

import { AiOutlineDown, AiOutlineUp, AiOutlineClose } from "react-icons/ai";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  return (
    <div className="flex items-center px-8 h-28 mx-auto max-w-[1240px] justify-around">
      <ul className="md:flex hidden">
        <li className="p-8">Home</li>
        <li className="p-8">About</li>
        <li className="p-8">Portfolio</li>
      </ul>
      <div onClick={handleMenu} className="block md:hidden">
        {!menu ? <AiOutlineDown size={20} color="#00df9a" /> : <AiOutlineUp size={20} color="#00df9a" />}
      </div>
      <ul
        className={
          menu
            ? "fixed bottom-0 w-full border-r border-r-gray-900 bg-[#000300]/25 backdrop-blur-md ease-in-out duration-500 text-white text-center rounded-t-xl"
            : "fixed bottom-[-100%] ease-in-out duration-1000"
        }
      >
        <div onClick={handleMenu}>
          <AiOutlineClose size={20} color="#00df9a" className="fixed right-0 m-2" />
        </div>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Portfolio</li>
      </ul>
    </div>
  );
};

export default Menu;
