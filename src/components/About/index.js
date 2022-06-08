import React from "react";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="text-black h-96 w-full p-10 justify-around flex flex-col text-justify">
      <h1 className="font-bold text-[#00df9a] text-xl text-center ">About</h1>
      <p className="mb-10">
        An Electrical Engineering Bachelor Degree who takes biomedical engineer
        as specialization, was turned into mobile apps developers using React
        Native. Experienced in Slicing UI, integrating with backend and UI/UX
        team to realization the apps mobile. Furthermore, I like playing game
        and doing photography to express myself, adding filters and typography
        into it.
      </p>
      <h2 className="font-bold text-[#00df9a] text-l text-center">
        And I loves landscapes!
      </h2>
      <p className="text-black font-bold text-center">Reach me on:</p>
      <div className="flex justify-center">
        <a
          className="px-8"
          href="https://www.linkedin.com/in/akmalmr/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          className="px-8"
          href="https://www.instagram.com/akmalmrsyd/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size={30} />
        </a>
        <a
          className="px-8"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&cc=akmallmr@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGoogleCircle size={30} />
        </a>
      </div>
    </div>
  );
};

export default About;
