import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<img src="" alt="Logo Image" />
			</div>

			{/* Below code will be hidden until medium screen size */}
			<ul className="hidden md:flex" style={{ fontSize: "20px" }}>
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger icon */}
			{/* from medium devices below code will be hidden */}
			<div className="md:hidden z-10" style={{ fontSize: "20px", cursor: "pointer" }} onClick={handleClick}>
				{nav ? <FaTimes /> : <FaBars />}
			</div>

			{/* Mobile view */}
			{nav && (
				<ul
					className={
						nav
							? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
							: "hidden"
					}
				>
					<li className="py-6 text-4xl">
						<Link onClick={handleClick} to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={handleClick} to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={handleClick} to="work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			)}

			{/* Social icons */}
			{/* below code will show from medium devices */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/muhammed-faraan/"
							target="_blank"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/Faraan10/"
							target="_blank"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto:faraanshaik19@gmail.com"
							target="_blank"
						>
							Mail <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://drive.google.com/file/d/1uuTDPiTyQ4RqM2Gk_wSx23mdMLAe7wYH/view?usp=sharing"
							download
							target="_blank"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;