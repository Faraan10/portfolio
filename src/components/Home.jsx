import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" id="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-300 text-xl sm:text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          MUHAMMED FARAAN
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-200">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in building responsive, full-stack web applications with
          great user experiences. Currently, I'm focused on building MERN stack
          development.
        </p>
        <div>
          <Link to="work" smooth={true} duration={400}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center gap-2 hover:bg-cyan-400 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              View Work
              <span className="group-hover:rotate-90 transform transition-transform duration-300">
                <HiArrowNarrowRight size={20} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
