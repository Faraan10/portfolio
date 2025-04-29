import React from "react";

const About = () => {
  return (
    <section
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
          <div className="text-right md:text-left pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
          <div className="text-3xl font-bold text-right md:text-left">
            <p>Hi. I'm Faraan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. From individuals to large
              enterprises, I love solving real-world problems with modern web
              technologies. Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
