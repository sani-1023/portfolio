import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sani Talukder
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Junior Software Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[900px]">
          I am an enthusiastic, ambitious, and hardworking individual seeking a
          role where I can grow and learn from experienced team members.Currently, I’m focused on building responsive full-stack web applications.

        </p>
        <div>
          <button href="#work" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
           <Link to='about' smooth={true} duration={500}>
            View Profile
          </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
