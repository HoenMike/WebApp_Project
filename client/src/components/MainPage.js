import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginDialog from "./LoginDialog";

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
		// Implement login logic here, e.g., call the login API
		// If successful, set isAuthenticated to true and set the username
		const token = "dummyToken"; // Replace with actual token from API response
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
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						Shopping Site
					</Typography>
					{isAuthenticated ? (
						<Button color="inherit" onClick={handleLogout}>
							Sign Out
						</Button>
					) : (
						<Button color="inherit" onClick={() => setLoginDialogOpen(true)}>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
			{isAuthenticated ? (
				<div>
					<h1>Welcome to the Shopping Site</h1>
					<p>You are logged in as {username}!</p> {/* Include username in the welcome message */}
				</div>
			) : (
				<div>
					<h1>Welcome to the Shopping Site</h1>
					<p>Please log in to continue.</p>
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
