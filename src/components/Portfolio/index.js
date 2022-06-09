import React from "react";
import { Project1 } from "../../assets";

const Portfolio = () => {
  return (
    <div className="text-black h-96 w-full p-10 justify-around flex flex-col text-justify bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-span-3 gap-8 xs:overflow-x-auto">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src="https://storage.googleapis.com/assets_akmal/assets/img/project-1.png" alt="/" className="w-1/2 mx-auto bg-white" />
          <h2 className="text-l font-bold py-4 text-[#00df9a] text-center">
            Project 1
          </h2>
          <div className="mx-2">
            <p className="text-xl font-bold text-[#00df9a]">
              Mindtrex Merchant - 2020
            </p>
            <p className="text-sm text-gray-500">
              This apps was second project of Mindtrex that can generate coupon
              discount product that collaboration with Mindtrex. Mindtrex is a
              education platform for a children grades 3-6. they can learn and
              doing some exam in there. The coupon discount will be generated
              when the children get a high value in some of subjects.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src="https://storage.googleapis.com/assets_akmal/assets/img/project-1.png" alt="/" className="w-1/2 mx-auto bg-white" />
          <h2 className="text-l font-bold py-4 text-[#00df9a] text-center">
            Project 2
          </h2>
          <div className="mx-2">
            <p className="text-xl font-bold text-[#00df9a]">TuvNord - 2021</p>
            <p className="text-sm text-gray-500">
              TuvNord is a calibrated company for calibrating machine in
              manufacture. I involved to makes a prototype of the apps, slicing
              UI and making a dummy json to make the prototypes looks live. But
              this project was cancelled after we give them the offers.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src="https://storage.googleapis.com/assets_akmal/assets/img/project-1.png" alt="/" className="w-1/2 mx-auto bg-white" />
          <h2 className="text-l font-bold py-4 text-[#00df9a] text-center">
            Project 3
          </h2>
          <div className="mx-2">
            <p className="text-xl font-bold text-[#00df9a]">
              Customer Portal - 2022
            </p>
            <p className="text-sm text-gray-500">
              I involved to make the internal apps of PointStar in mobile apps.
              This apps can see the licence (Google, Netsuite, etc.) request or
              the extension for their customer. I worked with UI/UX designer and
              backend developer to make it happens. Now, the apps still doing
              beta test then it will be release soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
