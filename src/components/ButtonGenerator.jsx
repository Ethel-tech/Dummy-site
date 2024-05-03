import { Button } from "react-bootstrap";

function ButtonGenerator({ label, onClick }) {
	return (
		<div>
			<Button variant="outline-primary" onClick={onClick}>
				{label}
			</Button>
		</div>
	);
}

export default ButtonGenerator;
