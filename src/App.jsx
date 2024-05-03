import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<div>
				<h1 className="display-1 text-center">API Calling</h1>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
