import { Card } from "react-bootstrap";

function UserShow({ user }) {
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={user.avatar} />
				<Card.Body>
					<Card.Title>{user.name}</Card.Title>
					<Card.Text>
						<span>{user.Job}</span> <br />
						<span>{user.country}</span>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default UserShow;
