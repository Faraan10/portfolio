import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div className="w-full h-screen bg-[#0a192f]">
			<div name="home" className="max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-cyan-300 sm:text-2xl">Hi, my name is</p>
				<h1 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6]">MUHAMMED FARAAN</h1>
				<h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital
					experiences. Currently, I’m focused on building responsive full-stack web applications.
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-400">
						<Link to="work" smooth={true} duration={400}>
							View Work
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
