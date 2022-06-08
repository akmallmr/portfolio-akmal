import React, { useEffect, useState } from "react";
import { Navbar, Home, About, Portfolio } from "./components";

import { AiOutlineDown, AiOutlineUp, AiOutlineClose } from "react-icons/ai";

function App() {
  const [menu, setMenu] = useState(false);
  const [route, setRoute] = useState("Home");

  useEffect(() => {
    console.log(route);
  }, [route]);

  const handleMenu = () => setMenu(!menu);

  const handleRoute = (title) => setRoute(title);

  const handlePopUpMenu = (title) => {
    setMenu(!menu);
    handleRoute(title);
  };

  return (
    <div className="h-[100%] block">
      <Navbar />

        {route === "Home" ? (
          <Home />
        ) : route === "About" ? (
          <About />
        ) : route === "Portfolio" ? (
          <Portfolio />
        ) : null}

      <div className="flex items-center px-8 h-28 mx-auto max-w-[1240px] justify-around">
        <ul className="md:flex hidden">
          <button
            className={
              route === "Home"
                ? "px-4 mx-5 bg-[#00df9a]  font-semibold rounded-xl ease-in-out duration-500"
                : "font-semibold px-4 mx-5"
            }
            onClick={() => handleRoute("Home")}
          >
            Home
          </button>
          <button
            className={
              route === "About"
                ? "px-4 mx-5 bg-[#00df9a]  font-semibold rounded-xl ease-in-out duration-500"
                : "font-semibold px-4 mx-5"
            }
            onClick={() => handleRoute("About")}
          >
            About
          </button>
          <button
            className={
              route === "Portfolio"
                ? "px-4 mx-5 bg-[#00df9a]  font-semibold rounded-xl ease-in-out duration-500"
                : "font-semibold px-4 mx-5"
            }
            onClick={() => handleRoute("Portfolio")}
          >
            Portfolio
          </button>
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {!menu ? (
            <AiOutlineDown size={20} color="#00df9a" />
          ) : (
            <AiOutlineUp size={20} color="#00df9a" />
          )}
        </div>
        <ul
          className={
            menu
              ? "fixed bottom-0 w-full border-r border-r-gray-900 bg-[#000300]/25 backdrop-blur-md ease-in-out duration-500 text-white text-center rounded-t-xl"
              : "fixed bottom-[-100%] ease-in-out duration-1000"
          }
        >
          <div onClick={handleMenu}>
            <AiOutlineClose size={20} className="fixed right-0 m-2" />
          </div>
          <li>
            <button
              onClick={() => handlePopUpMenu("Home")}
              className={
                route === "Home" ? "p-4 text-[#00df9a]" : "p-4 text-white"
              }
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePopUpMenu("About")}
              className={
                route === "About" ? "p-4 text-[#00df9a]" : "p-4 text-white"
              }
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePopUpMenu("Portfolio")}
              className={
                route === "Portfolio" ? "p-4 text-[#00df9a]" : "p-4 text-white"
              }
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
