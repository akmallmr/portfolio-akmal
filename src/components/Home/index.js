import React from "react";
import { IMGAkmal } from "../../assets";

import Typed from 'react-typed'

const Home = () => {
  return (
    <div className="text-black h-96">
      <div className="flex justify-center ">
        <img
          alt="akmal.jpg"
          src="https://storage.googleapis.com/assets_akmal/assets/img/akmal.jpg"
          className="w-52 rounded-full my-4"
        />
      </div>
      <div>
        <div className="text-center">
          <p className="text-l font-mono">Hello, I'm</p>
          <h1 className="text-3xl font-mono text-[#00df9a] font-bold mb-10">
            Akmal Maula Rasyid.
          </h1>
            <p className="font-bold text-[#808080]">I'm focusing in</p>
            <Typed className="font-mono text-[#00df9a]" strings={['React Native: Android', 'React: Beginner', 'Tailwind CSS: Beginner', 'Google Cloud']} typeSpeed={75} backSpeed={60} loop />
        </div>
      </div>
    </div>
  );
};

export default Home;
