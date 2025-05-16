const About = () => {
  return (
    <section
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        <div className="max-w-[1000px] w-full mb-8">
          <p className="text-4xl font-bold border-b-4 border-cyan-400 inline-block mx-auto md:mx-0">
            About
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left text-3xl font-bold">
            <p>Hi. I'm Faraan, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-center md:text-left">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for individuals, small businesses, and large enterprises. Let’s
              build something great together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
