import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
		</Router>
	);
}

export default App;
