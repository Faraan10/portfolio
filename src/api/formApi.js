import { data } from "autoprefixer";
import axios from "axios";

const formApi = async () => {
	const response = await axios({
		url: "",
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => console.log(err));
	return response;
};

export default formApi;
