import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/LoginDialog";
import MainPage from "./components/MainPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
		</Router>
	);
}

export default App;
