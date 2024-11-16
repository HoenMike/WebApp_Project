import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginDialog from "./LoginDialog";

function MainPage() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loginDialogOpen, setLoginDialogOpen] = useState(false);

	const handleLogin = (username, password) => {
		// Implement login logic here, e.g., call the login API
		// If successful, set isAuthenticated to true
		setIsAuthenticated(true);
	};

	const handleLogout = () => {
		// Implement logout logic here, e.g., clear tokens
		setIsAuthenticated(false);
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
					<p>You are logged in!</p>
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
