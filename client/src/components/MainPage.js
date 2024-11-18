import React, { useEffect, useState } from "react";
import LoginDialog from "./LoginDialog";
import NavBar from "./NavBar";

function MainPage() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loginDialogOpen, setLoginDialogOpen] = useState(false);
	const [username, setUsername] = useState("");

	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		const storedToken = localStorage.getItem("token");
		if (storedUsername && storedToken) {
			setIsAuthenticated(true);
			setUsername(storedUsername);
		}
	}, []);

	const handleLogin = (username, password) => {
		const token = "dummyToken";
		localStorage.setItem("username", username);
		localStorage.setItem("token", token);
		setIsAuthenticated(true);
		setUsername(username);
	};

	const handleLogout = () => {
		// Implement logout logic here, e.g., clear tokens
		localStorage.removeItem("username");
		localStorage.removeItem("token");
		setIsAuthenticated(false);
		setUsername("");
	};

	return (
		<div>
			<NavBar
				isAuthenticated={isAuthenticated}
				handleLogout={handleLogout}
				handleLoginDialogOpen={() => setLoginDialogOpen(true)}
			/>
			{isAuthenticated ? (
				<div>
					<h1>Welcome to the Shopping Site</h1>
					<p>You are logged in as 123123 {username}!</p> {/* Include username in the welcome message */}
				</div>
			) : (
				<div>
					<h1>Welcome to the Shopping Site</h1>
					<p>Please log in to continue!.</p>
				</div>
			)}
			<LoginDialog
				open={loginDialogOpen}
				onClose={() => setLoginDialogOpen(false)}
				onLogin={handleLogin}
			/>
		</div>
	);
}

export default MainPage;
