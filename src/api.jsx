import axios from "axios";

const fetchUsers = async () => {
	const response = await axios.get(
		"https://6630f43cc92f351c03dbb2dc.mockapi.io/api/v1/users"
	);

	return response.data;
};

export default fetchUsers;
