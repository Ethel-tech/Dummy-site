import { useState } from "react";
import UserShow from "../components/UserShow";
import fetchUsers from "../api";
import ButtonGenerator from "../components/ButtonGenerator";

function Home() {
	const [users, setUsers] = useState([]);
	const handleClick = async (profile) => {
		const result = await fetchUsers(profile);
		setUsers(result);
	};
	const showUser = users.map((user) => {
		return <UserShow key={user.id} user={user} />;
	});

	return (
		<>
			<div className="ms-3">
				<ButtonGenerator label="Generate Users" onClick={handleClick} />
			</div>
			<div className="user-list container d-flex flex-wrap ms-3 p-2">
				{showUser}
			</div>
		</>
	);
}

export default Home;
