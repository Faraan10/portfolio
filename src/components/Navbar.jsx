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
				{/* <img src="" alt="Logo Image" /> */}
				<h2 style={{ padding: "5px", fontSize: "25px" }}>PORTFOLIO</h2>
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
				<div className="social-icons-container">
					<a href="https://www.linkedin.com/in/muhammed-faraan/" target="_blank">
						<div className="icon">
							<i className="fa-brands fa-linkedin"></i>
						</div>
						<div className="name">LinkedIn</div>
					</a>

					<a href="https://github.com/Faraan10/" target="_blank">
						<div className="icon">
							<i className="fa-brands fa-github"></i>
						</div>
						<div className="name">Github</div>
					</a>

					<a href="mailto:faraanshaik19@gmail.com" target="_blank">
						<div className="icon">
							<i className="fa-regular fa-envelope"></i>
						</div>
						<div className="name">Mail</div>
					</a>

					<a href="https://drive.google.com/file/d/1uuTDPiTyQ4RqM2Gk_wSx23mdMLAe7wYH/view?usp=sharing" target="_blank">
						<div className="icon">
							<i className="fa-solid fa-file" style={{ marginLeft: "3px" }}></i>
						</div>
						<div className="name" style={{ marginLeft: "5px" }}>
							Resume
						</div>
					</a>
				</div>
				<br />
			</div>
		</div>
	);
};

export default Navbar;
