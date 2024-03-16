import React, { useState } from "react";

const Contact = () => {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	//console.log(info);

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log(info);
	};

	return (
		<div name="contact" className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4">
			<form className="flex flex-col max-w-[600px] w-full" onSubmit={handleSubmit}>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-gray-300">Contact</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
					value={name}
					onChange={handleChange}
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
					value={message}
					onChange={handleChange}
				></textarea>
				<button
					type="submit"
					className="text-white border-2 hover:bg-cyan-300 hover:border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center"
				>
					Let's Connect
				</button>
			</form>
		</div>
	);
};

export default Contact;
